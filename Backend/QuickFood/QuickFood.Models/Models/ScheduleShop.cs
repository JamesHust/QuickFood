using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class ScheduleShop
    {
        public string ShopId { get; set; }
        public int DayOfWeek { get; set; }
        public string OpenTime { get; set; }
        public string CloseTime { get; set; }

        public virtual Shop Shop { get; set; }
    }
}
