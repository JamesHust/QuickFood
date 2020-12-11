using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class DishSold
    {
        public string DishId { get; set; }
        public string DishCode { get; set; }
        public string DishName { get; set; }
        public string ShopId { get; set; }
        public string Price { get; set; }
        public int Amount { get; set; }
        public DateTime TimeoSell { get; set; }

        public virtual Dish Dish { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
