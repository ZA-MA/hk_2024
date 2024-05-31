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
    /*[Authorize(Roles = "Delivery")]*/
    public class DeliveryController : Controller
    {
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllOffers()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();
                
                var offers = db.Offers.Include(o => o.user).Where(o => o.isActive == true).ToList();

                return Ok(offers);
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> GetOffer(HelperTransferModel input)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var offer = db.Offers.Include(o => o.user).Where(o => o.id == input.Number1).FirstOrDefault();

                return Ok(offer);
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> UpdatePinCode(HelperTransferModel input)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var offers = db.Offers.Include(o => o.user).Where(o => o.id == input.Number1).FirstOrDefault();

                offers.pin = input.Info1;

                db.SaveChanges();

                return Ok(offers);
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> CloseOffer(HelperTransferModel input)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var offers = db.Offers.Include(o => o.user).Where(o => o.id == input.Number1).FirstOrDefault();

                offers.isActive = false;
                offers.dateEnd = DateTime.Now;

                db.SaveChanges();

                return Ok(offers);
            }
        }

    }
}
