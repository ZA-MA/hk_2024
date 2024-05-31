using System.ComponentModel.DataAnnotations;

namespace hk_2024_backend.Models.ViewModels
{
    public class Registration
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Patronymic { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Password { get; set; }

        public string? CompanyName { get; set; }
        public string? Inn { get; set; }
        public string? TypeOfOrganization { get; set; }
    }
}
