using System;
using System.Collections.Generic;

namespace Recipe.Models
{
    public partial class Recipe
    {
        public Recipe()
        {
            CartItems = new HashSet<CartItem>();
        }

        public int Id { get; set; }
        public string Recipename { get; set; } = null!;
        public string Ingredients { get; set; } = null!;
        public TimeSpan? CookingTime { get; set; }
        public string? CuisineType { get; set; }
        public string? MealType { get; set; }
        public byte[] Imgs { get; set; } = null!;

        public virtual ICollection<CartItem> CartItems { get; set; }
    }
}
