using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class PositionShop
    {
        public PositionShop()
        {
            AdminShops = new HashSet<AdminShop>();
        }

        public int Code { get; set; }
        public string Name { get; set; }

        public virtual ICollection<AdminShop> AdminShops { get; set; }
    }
}
