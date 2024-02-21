using System.Text.Json.Serialization;

namespace Recipe.DtosModels
{
    public class dtoregister
    {
        public string username { get; set; }
        public string password { get; set; }
        public string? email { get; set; }
        public string? name {get; set;}
        [JsonIgnore]
        public int? role {get; set;}
    }
}
