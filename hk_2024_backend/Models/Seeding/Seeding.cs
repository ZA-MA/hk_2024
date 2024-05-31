using hk_2024_backend.Controllers;
using hk_2024_backend.Auth;
using hk_2024_backend.Data;

namespace hk_2024_backend.Models.Seeding
{
    public class Seeding
    {
        public static async void Initialize()
        {
            using (var serviceScope = ServiceActivator.GetScope())
            {

                var db = serviceScope.ServiceProvider.GetService<AppDbContext>();


            }
        }
    }
}
