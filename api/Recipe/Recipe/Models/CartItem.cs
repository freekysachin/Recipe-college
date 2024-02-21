using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class CartItem
    {
        public int Id { get; set; }
        public int Cartid { get; set; }
        public int Recipeid { get; set; }
        public int Quantity { get; set; }

        public virtual Cart Cart { get; set; } = null!;
        public virtual Recipe Recipe { get; set; } = null!;
    }
}
