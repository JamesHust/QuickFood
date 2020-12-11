using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Category
    {
        public string CategoryId { get; set; }
        public int CategoryCode { get; set; }
        public string CategoryName { get; set; }
        public string ItemId { get; set; }

        public virtual Item Item { get; set; }
        public virtual Dish Dish { get; set; }
    }
}
