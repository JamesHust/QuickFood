using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class ImportMaterial
    {
        public int ShopId { get; set; }
        public string Description { get; set; }
        public string Amount { get; set; }
        public DateTime ImportDate { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
