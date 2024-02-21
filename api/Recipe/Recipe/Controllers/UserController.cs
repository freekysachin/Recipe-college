using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipe.Data.Services;

namespace Recipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepo _user;
        public UserController(IUserRepo user)
        {
            _user = user;
        } 
        [Authorize(Roles ="admin")]
        [HttpGet("{id}")]
        public async Task<Object> getbyid(int id)
        {
          return await _user.getbyid(id);
        }
    }
}
