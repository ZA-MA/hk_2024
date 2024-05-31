
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Specialized;
using System.Configuration;
using System.Drawing;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Reflection;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Policy;
using System.Text;
using System.Text.Encodings.Web;
using static System.Net.Mime.MediaTypeNames;
using System.Text.RegularExpressions;
using hk_2024_backend.Data;
using hk_2024_backend.Auth;
using hk_2024_backend.Auth;
using hk_2024_backend.Models;
using Microsoft.Extensions.Configuration;
using System.Security.Principal;
using hk_2024_backend.Controllers;
using Azure;
using hk_2024_backend.Models.ViewModels;
using System.Data;
using System.Diagnostics.Eventing.Reader;


namespace JWTRefreshToken.NET6._0.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        [HttpGet]
        [Route("[action]")]
        /*[AuthorizeRoles("User", "Admin")]*/
        public async Task<IActionResult> CheckAuth()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();
                string email = HttpContext.Request.Cookies["Email"];
                if (email == null || email == String.Empty)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_1", Message = "Mail not found." });
                }


                var user = db.Users.Where(a => a.email == email).Include(a => a.login).Include(a => a.role).FirstOrDefault();

                if (user == null)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new ResponseView { Status = "Error_1", Message = "User was not find" });
                }
                else
                {
                    string role = user.role.role;
                    return Ok(new
                    {
                        role = role,
                        user = new
                        {
                            id = user.id,
                            email = user.email,
                            firstName = user.firstName,
                            lastName = user.lastName,
                            patronymic = user.patronymic,
                            isActivated = true
                        },
                        helpNumber = "8900000000"
                    });
                }
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var login = await db.Logins.Where(l => l.email == model.email).FirstOrDefaultAsync();

                if (login != null)
                {

                    if (login.password == HashHelper.hashPassword(model.password))
                    {
                        var user = db.Users.Where(a => a.login == login).Include(a => a.login).Include(a => a.role).FirstOrDefault();

                        if (user == null)
                        {
                            return StatusCode(StatusCodes.Status500InternalServerError, new ResponseView { Status = "Error_1", Message = "User was not find" });
                        }

                        string role = user.role.role;
                        var identity = GetIdentity(user.firstName + " " + user.patronymic, role);

                        DateTime expires = DateTime.UtcNow.AddDays(1);

                        if (model.rememberMe == true) { expires = DateTime.UtcNow.AddDays(7); }

                        //DateTime.UtcNow.AddMinutes(-5)

                        var jwt = new JwtSecurityToken(
                                issuer: AuthOptions.ISSUER,
                                audience: AuthOptions.AUDIENCE,
                                notBefore: DateTime.UtcNow,
                                claims: identity.Claims,
                                expires: expires,
                                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                        var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                        HttpContext.Response.Cookies.Append("token", encodedJwt, new Microsoft.AspNetCore.Http.CookieOptions { Expires = expires });
                        HttpContext.Response.Cookies.Append("Email", user.email, new Microsoft.AspNetCore.Http.CookieOptions { Expires = expires });
                        
                        return Ok(new
                        {
                            token = encodedJwt,
                            role = role,
                            user = new
                            {
                                id = user.id,
                                email = user.email,
                                firstName = user.firstName,
                                lastName = user.lastName,
                                patronymic = user.patronymic,
                                isActivated = true
                            },
                            helpNumber = "8900000000"
                        });
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status500InternalServerError, new ResponseView { Status = "Error_2", Message = "Incorrect password" });
                    }
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new ResponseView { Status = "Error_1", Message = "User was not find" });
                }
            }

        }

        private ClaimsIdentity GetIdentity(string username, string role)
        {

            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, username),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, role)
                };
            ClaimsIdentity claimsIdentity =
            new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;


        }


        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> UserRegistration(UserRegistration model)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (db.Logins.Any(l => l.email == model.Email))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new ResponseView { Status = "Error_1", Message = "User already exists!" });
                }

                var login = new Login
                {
                    email = model.Email,
                    password = HashHelper.hashPassword(model.Password),
                };

                db.Logins.Add(login);
                db.SaveChanges();

                var user = new User
                {
                    login = db.Logins.Where(l => l.email == model.Email).FirstOrDefault(),
                    email = model.Email,
                    phone = model.Phone,
                    firstName = model.FirstName,
                    lastName = model.LastName,
                    patronymic = model.Patronymic
                };

                db.Users.Add(user);

                await db.SaveChangesAsync();

                return Ok(new ResponseView { Status = "Success", Message = "User created successfully!" });
            }
        }


    }
}
