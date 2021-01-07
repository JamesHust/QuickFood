using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Lịch mở quán
    /// </summary>
    [Table("schedule_shop")]
    public partial class ScheduleShop
    {
        /// <summary>
        /// Id cửa hàng
        /// </summary>
        [ExplicitKey]
        public string ShopId { get; set; }

        /// <summary>
        /// Các thứ trong tuần (2-7, 8- Chủ nhật)
        /// </summary>
        public int DayOfWeek { get; set; }

        /// <summary>
        /// Thời gian mở cửa
        /// </summary>
        public string OpenTime { get; set; }

        /// <summary>
        /// Thời gian đóng cửa
        /// </summary>
        public string CloseTime { get; set; }

        #region Auto gen
        /// <summary>
        /// Cửa hàng
        /// </summary>
        public virtual Shop Shop { get; set; }
        #endregion
    }
}
