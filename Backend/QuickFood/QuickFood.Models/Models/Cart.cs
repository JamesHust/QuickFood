using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Giỏ hàng
    /// </summary>
    [Table("cart")]
    public partial class Cart
    {
        /// <summary>
        /// Id khách hàng
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Id món ăn
        /// </summary>
        public string DishId { get; set; }

        /// <summary>
        /// Tên món ăn
        /// </summary>
        public string DishName { get; set; }

        /// <summary>
        /// Giá bán
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Ghi chú
        /// </summary>
        public string Note { get; set; }

        /// <summary>
        /// Số lượng mua
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// Khách hàng
        /// </summary>
        public virtual Customer Customer { get; set; }

        /// <summary>
        /// Món ăn 
        /// </summary>
        public virtual Dish Dish { get; set; }
    }
}
