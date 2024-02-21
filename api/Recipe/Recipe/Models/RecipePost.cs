using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class RecipePost
    {
        public int RecipepostsId { get; set; }
        public int Userid { get; set; }
        public int PostId { get; set; }

        public virtual Post Post { get; set; } = null!;
        public virtual UserMaster User { get; set; } = null!;
    }
}
