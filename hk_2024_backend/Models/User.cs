using Microsoft.AspNetCore.Identity;
using System.Security.Principal;

namespace hk_2024_backend.Models
{
    public class User
    {
        public int id { get; set; }
        public int login_id { get; set; }
        public int role_id { get; set; }
        
        public string email { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? patronymic { get; set; }
        public string phone { get; set; }
        public Login login { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public string numberHome { get; set; }
        public int numberFlat { get; set; }
        public Role role { get; set; }

    }

}
