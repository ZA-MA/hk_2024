using Microsoft.AspNetCore.Identity;
using System.Security.Principal;

namespace hk_2024_backend.Models
{
    public class Offer
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public User user { get; set; }
        public DateTime dateStart { get; set; }
        public string type { get; set; }
        public bool isActive { get; set; }
        public DateTime? dateEnd { get; set; }
        public string? pin { get; set; }
    }

}
