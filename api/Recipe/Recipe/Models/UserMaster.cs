using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class UserMaster
    {
        public UserMaster()
        {
            RecipePosts = new HashSet<RecipePost>();
        }

        public int Userid { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int Roleid { get; set; }

        public virtual Role Role { get; set; } = null!;
        public virtual Cart Cart { get; set; } = null!;
        public virtual ICollection<RecipePost> RecipePosts { get; set; }
    }
}
