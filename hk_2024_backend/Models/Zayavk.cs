using Microsoft.AspNetCore.Identity;
using System.Security.Principal;

namespace hk_2024_backend.Models
{
    public class Zayavk
    {
        public int id { get; set; }
        public string text { get; set; }
        public DateTime date { get; set; }
        public int offer_id { get; set; }
        public Offer offer { get; set;}

    }

}
