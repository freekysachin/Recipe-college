using System.Text.Json.Serialization;
//using Recipe.Models;

namespace Recipe.DtosModels
{
    public class dtouser
    {
        public string? Username { get; set; }
        [JsonIgnore]
        public string? Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? phone { get; set; }

        //public CartItem? cartItems {get; private set;}
    }
}
