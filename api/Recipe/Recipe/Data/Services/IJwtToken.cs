using Microsoft.AspNetCore.Mvc;
using Recipe.DtosModels;
//using Recipe.Models;

namespace Recipe.Data.Services
{
    public interface IJwtToken
    {
        Object GenerateToken(dtologin user);
        Task<IActionResult> VerifyToken();
        Task<string> GenerateRefreshToken();
    }
}
