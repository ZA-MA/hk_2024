using hk_2024_backend.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using hk_2024_backend.Auth;
using hk_2024_backend.Data;
using hk_2024_backend.Models;
using hk_2024_backend.Models.ViewModels;

namespace hk_2024_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    /*[Authorize(Roles = "User")]*/
    public class UserController : Controller
    {
        /*[HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetUserInfo()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();
                string email = HttpContext.Request.Cookies["Email"];
                if (email == null || email == String.Empty)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_1", Message = "Mail not found." });
                }
                var user = db.Users.Where(a => a.email == email).FirstOrDefault();
                if (user == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "User not found." });
                }


                return Ok(new { user = user });
            }
        }*/

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetUserInfo()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var user = db.Users.Where(u => u.id == 1).FirstOrDefault();

                if(user == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "User not found." });
                }

                return Ok(new { user = user });
            }
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetUserOffers()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var offers = db.Offers.Include(o => o.user).Where(o => o.user_id == 1).ToList();

                if (offers == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "Offers not found." });
                }

                return Ok(new { offers = offers });
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> DoOffer(HelperTransferModel input)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                //var offers = db.Offers.ToList();

                var offer = new Offer
                {
                    dateStart = DateTime.Now,
                    user = db.Users.Where(u => u.id == 1).FirstOrDefault(),
                    type = input.Info1,
                    isActive = true,

                };

                db.Offers.Add(offer);

                db.SaveChanges();

                return Ok();
            }
        }

    }
}
