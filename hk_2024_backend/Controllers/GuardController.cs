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
    /*[Authorize(Roles = "Guard")]*/
    public class GuardController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllOffers()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var offers = db.Offers.Include(o => o.user).ToList();

                if(offers == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "Offers not found." });
                }

                return Ok(new { offers = offers });
            }
        }


    }
}
