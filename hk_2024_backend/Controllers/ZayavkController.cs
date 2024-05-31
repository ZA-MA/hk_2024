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
    public class ZayavkController : Controller
    {

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetZayavks()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var zayavks = db.Zayavks.ToList();

                if(zayavks == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "zayavks not found." });
                }

                return Ok(new { zayavks = zayavks });
            }
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> createZayavks(HelperTransferModel input)
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {
                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();

                var zayavks = db.Zayavks.ToList();

                var zk = new Zayavk
                {
                    date = DateTime.Now,
                    text = "Не могу войти",
                    offer = db.Offers.Where(o => o.id == input.Number1).FirstOrDefault()
                };

                db.Zayavks.Add(zk);

                db.SaveChanges();
                if (zayavks == null)
                {
                    return StatusCode(StatusCodes.Status511NetworkAuthenticationRequired, new ResponseView { Status = "Error_2", Message = "zayavks not found." });
                }

                return Ok(new { zayavks });
            }
        }

    }
}
