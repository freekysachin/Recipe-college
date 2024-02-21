using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class Post
    {
        public int PostId { get; set; }
        public DateTime PostDatetime { get; set; }
        public int? Likes { get; set; }
        public byte[] Imgs { get; set; } = null!;

        public virtual RecipePost RecipePost { get; set; } = null!;
    }
}
