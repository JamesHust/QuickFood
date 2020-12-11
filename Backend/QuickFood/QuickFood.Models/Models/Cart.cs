using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Cart
    {
        public string CustomerId { get; set; }
        public string DishId { get; set; }
        public string DishName { get; set; }
        public string Price { get; set; }
        public string Note { get; set; }
        public int Amount { get; set; }
        public DateTime CreateDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dish Dish { get; set; }
    }
}
