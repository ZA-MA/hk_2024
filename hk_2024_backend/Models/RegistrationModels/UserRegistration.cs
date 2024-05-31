
using System.ComponentModel.DataAnnotations;

namespace hk_2024_backend.Models
{
    public class UserRegistration
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Patronymic { get; set; }

        [Required(ErrorMessage = "Требуется ввести E-mail")]
        [EmailAddress(ErrorMessage = "Неверный E-mail")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Требуется ввести номер телефона")]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Требуется ввести пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}