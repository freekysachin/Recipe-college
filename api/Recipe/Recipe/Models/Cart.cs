using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class Cart
    {
        public Cart()
        {
            CartItems = new HashSet<CartItem>();
        }

        public int CartId { get; set; }
        public int Userid { get; set; }

        public virtual UserMaster User { get; set; } = null!;
        public virtual ICollection<CartItem> CartItems { get; set; }
    }
}
