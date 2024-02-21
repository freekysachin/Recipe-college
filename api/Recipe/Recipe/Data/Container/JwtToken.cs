using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Recipe.Data.Services;
using Recipe.DtosModels;
//using Recipe.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Recipe.Data.Container
{
    public class JwtToken : IJwtToken
    {
        private readonly IConfiguration _configuration;
        public JwtToken(IConfiguration configuration)
        {

            _configuration = configuration;

        }
        public Object GenerateToken(dtologin user)
        {
            var tknhandler = new JwtSecurityTokenHandler();
            var secuirtyKey = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = _configuration["Jwt:Audience"],
                Issuer = _configuration["Jwt:Issuer"],
                Subject = new ClaimsIdentity( new Claim[]
                {
                    new Claim(ClaimTypes.Name,user.username),
                    new Claim(ClaimTypes.Role,user.role)
                }),
                Expires = DateTime.UtcNow.AddSeconds(10),
                SigningCredentials = new SigningCredentials( new SymmetricSecurityKey(secuirtyKey),SecurityAlgorithms.HmacSha256)
            };
            var token = tknhandler.CreateToken(tokenDescriptor);
            var finaltoken = tknhandler.WriteToken(token);
            return new
            {
                token = finaltoken,
                expiration = token.ValidTo
            };
        }

        public Task<string> GenerateRefreshToken()
        {
            throw new NotImplementedException();
        }


        public Task<IActionResult> VerifyToken()
        {
            throw new NotImplementedException();
        }
    }
}
