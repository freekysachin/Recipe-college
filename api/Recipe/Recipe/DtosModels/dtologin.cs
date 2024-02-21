using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace Recipe.DtosModels
{
    public class dtologin
    {
        [Required(ErrorMessage ="required username")]
        public string username { get; set; }
        [Required(ErrorMessage ="required password")]
        public string password { get; set; }
        [JsonIgnore]
        [AllowNull]
        public string? role {get;  set;}
    }
}
