using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class AdminShop
    {
        public string Id { get; set; }
        public string ShopId { get; set; }
        public int PositionCode { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public virtual PositionShop PositionCodeNavigation { get; set; }
        public virtual Shop Shop { get; set; }
    }
}
