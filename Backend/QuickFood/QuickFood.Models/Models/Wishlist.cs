using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Danh sách món ăn yêu thích
    /// </summary>
    [Table("wishlist")]
    public partial class Wishlist
    {
        /// <summary>
        /// Id khách hàng
        /// </summary>
        [ExplicitKey]
        public string CustomerId { get; set; }

        /// <summary>
        /// Id Món ăn
        /// </summary>
        public string DishId { get; set; }

        /// <summary>
        /// Tên món ăn
        /// </summary>
        public string DishName { get; set; }

        /// <summary>
        /// Giá tiền
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Id cửa hàng
        /// </summary>
        public string ShopId { get; set; }

        #region Auto gen
        /// <summary>
        /// Khách hàng
        /// </summary>
        public virtual Customer Customer { get; set; }

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
