using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class OrderHistory
    {
        public string OrderId { get; set; }
        public int OrderStatus { get; set; }
        public string CustomerId { get; set; }
        public string DishId { get; set; }
        public string Price { get; set; }
        public int Amount { get; set; }
        public string Ship { get; set; }
        public DateTime CreateDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dish Dish { get; set; }
    }
}
