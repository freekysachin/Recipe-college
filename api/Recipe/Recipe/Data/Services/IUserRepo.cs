using Microsoft.AspNetCore.Identity;
//using Recipe.Models;
using Microsoft.AspNetCore.Mvc;
using Recipe.DtosModels;

namespace Recipe.Data.Services
{
    public interface IUserRepo
    {
        Task<IActionResult> Create(dtoregister user);
        Task<Object> Verify(dtologin user);
         Task<object> getbyid(int id);
    }
}
