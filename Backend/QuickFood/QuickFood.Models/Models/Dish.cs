using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Dish
    {
        public Dish()
        {
            Orders = new HashSet<Order>();
        }

        public string Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ShopId { get; set; }
        public string ItemId { get; set; }
        public string CategoryId { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Img { get; set; }
        public int TypeFood { get; set; }
        public int Stocking { get; set; }
        public int Amount { get; set; }
        public int IsSale { get; set; }
        public int? SalePercent { get; set; }
        public string TemporaryPrice { get; set; }

        public virtual Category Category { get; set; }
        public virtual Item Item { get; set; }
        public virtual Shop Shop { get; set; }
        public virtual DishSold DishSold { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
