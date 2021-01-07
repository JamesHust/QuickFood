using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Món ăn đã bán được
    /// </summary>
    [Table("dish_sold")]
    public partial class DishSold
    {
        /// <summary>
        /// Id món ăn
        /// </summary>
        [ExplicitKey]
        public string DishId { get; set; }

        /// <summary>
        /// Mã món ăn
        /// </summary>
        public string DishCode { get; set; }

        /// <summary>
        /// Tên món ăn
        /// </summary>
        public string DishName { get; set; }

        /// <summary>
        /// Id cửa hàng
        /// </summary>
        public string ShopId { get; set; }

        /// <summary>
        /// Giá đã bán
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Số lượng đã bán
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Thời điểm bán
        /// </summary>
        public DateTime TimeoSell { get; set; }

        #region Auto gen
        /// <summary>
        /// Món ăn
        /// </summary>
        public virtual Dish Dish { get; set; }

        /// <summary>
        /// Cửa hàng
        /// </summary>
        public virtual Shop Shop { get; set; }
        #endregion 
    }
}
