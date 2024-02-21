using Microsoft.AspNetCore.Mvc;
using Recipe.Data.Services;
using Recipe.Models;
using Recipe.DtosModels;
using Microsoft.EntityFrameworkCore;
using Recipe.Context;
using System.Security.Authentication;

namespace Recipe.Data.Container
{
    public class UserRepo : IUserRepo
    {
         private readonly FoodieFYContext _context;
         private readonly IJwtToken _jwtToken;
         public UserRepo(FoodieFYContext context, IJwtToken jwtToken)
         {
           _context = context;
             _jwtToken = jwtToken;
        }

         public async Task<IActionResult> Create(dtoregister user)
         {

             try
             {
                 var UserMaster = new UserMaster
                 {
                     Username = user.username,
                     Password = user.password,
                     Email = user.email,
                     Name = user.name,
                     Roleid = 2
                 };
                await _context.UserMasters.AddAsync(UserMaster);
                 await _context.SaveChangesAsync();
                 var cart = new Cart
                 {
                    Userid = UserMaster.Userid
                 };
                 await _context.Carts.AddAsync(cart);
                 await _context.SaveChangesAsync();
                 return new ObjectResult(new { success = true }) { StatusCode = 200 };
             }
             catch (Exception ex)
             {
                 return new ObjectResult(new { success = false, error = ex.Message }) { StatusCode = 500 };
             } 
         }

         public async Task<Object> Verify(dtologin user)
         {
             try
             {
                var usr = await _context.UserMasters.Join(_context.Roles,u => u.Roleid, r=> r.Roleid,(u,r)=>new dtologin{
                   username=  u.Username,
                   password = u.Password,
                   role = r.Rolename
                }).Where(u => u.username == user.username).FirstOrDefaultAsync();

                 if (usr!=null)
                 {
                     var token = _jwtToken.GenerateToken(usr);
                     return new ObjectResult(new { Token = token }) { StatusCode = 200 };
                 }
                 return new ObjectResult(new { Message = "user does not exist" }) { StatusCode = 401 };
             }
             catch (Exception ex)
             {
                 return new ObjectResult(new { error = ex.Message }) { StatusCode = 500 };
             }
             
         }

        public async Task<object> getbyid(int id)
        {
            try{
                return new
                {
                    data = await (from u in _context.UserMasters
                            join c in _context.Carts
                            on u.Userid equals c.Userid
                            into gp
                            from c in gp.DefaultIfEmpty()
                            where u.Userid == id
                            select new{
                                username = u.Username,
                                name = u.Name,
                                email = u.Email,
                                cartid = c!=null? c.CartId : (int?)null
                            }).FirstOrDefaultAsync()
                }; 
            }
            catch(Exception ex)
            {
                return new{error = ex.Message};
            }
        }
    }
}
