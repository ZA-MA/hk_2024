using System.ComponentModel.DataAnnotations;

namespace hk_2024_backend.Models.ViewModels
{
    public class ViewUser
    {

    }

    public class ViewUpdateUserInfo
    {
        public int id { get; set; }
        public string email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string patronymic { get; set; }
        public string phone { get; set; }
    }

    public class ViewUpdateCompanyInfo
    {
        public int id { get; set; }
        [Required(ErrorMessage = "Требуется ввести E-mail")]
        [EmailAddress(ErrorMessage = "Неверный E-mail")]
        public string email { get; set; }
        public string name_company { get; set; }
        public string inn { get; set; }
        public string type_company { get; set; }
        public string phone { get; set; }
    }

    public class ViewChangePassword
    {
        public int id { get; set; }
        public string password { get; set; }
        public string newPassword { get; set; }
    }
    public class ViewUpdateAvatar 
    {
        public int id { get; set; }
        public string avatar_url { get; set; }
    }

    public class ViewFilterHistory
    {
        public List<string>? types { get; set; }
        public List<DateTime>? dates { get; set; }
        public int? user_id { get; set; }
    }
}
