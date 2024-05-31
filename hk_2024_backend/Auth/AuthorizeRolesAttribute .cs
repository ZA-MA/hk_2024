using Microsoft.AspNetCore.Authorization;
using hk_2024_backend.Models;

namespace hk_2024_backend.Auth
{
    public class AuthorizeRolesAttribute : AuthorizeAttribute
{
    public AuthorizeRolesAttribute(params string[] roles) : base()
    {
        Roles = string.Join(",", roles);
    }
}
}
