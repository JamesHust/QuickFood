using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Item
    {
        public string Id { get; set; }
        public int Code { get; set; }
        public string Name { get; set; }

        public virtual Category Category { get; set; }
        public virtual Dish Dish { get; set; }
    }
}
