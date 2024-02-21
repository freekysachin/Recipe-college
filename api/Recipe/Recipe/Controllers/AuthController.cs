using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Recipe.Data;
using Recipe.Data.Services;
using Recipe.DtosModels;

namespace Recipe.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepo _userRepo;
        public AuthController(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] dtoregister user)
        {
            return await _userRepo.Create(user);
        }

        [HttpPost]
        [Route("login")]
        public async Task<Object> login([FromBody] dtologin? user)
        {
            if(user == null)
            {
                return new { error = "user credentials are required"};
            }
             return await _userRepo.Verify(user);
        } 
    }
}
