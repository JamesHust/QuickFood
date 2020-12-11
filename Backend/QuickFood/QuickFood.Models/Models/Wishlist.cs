using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Wishlist
    {
        public string CustomerId { get; set; }
        public string DishId { get; set; }
        public string DishName { get; set; }
        public string Price { get; set; }
        public string ShopId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dish Dish { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
