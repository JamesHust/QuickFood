using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class OrderSuccess
    {
        public string OrderId { get; set; }
        public string CustomerId { get; set; }
        public string DishId { get; set; }
        public string ShopId { get; set; }
        public string Price { get; set; }
        public int Amount { get; set; }
        public string Ship { get; set; }
        public DateTime CreateDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dish Dish { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
