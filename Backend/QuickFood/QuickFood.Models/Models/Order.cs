using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Đơn đặt hàng (Khi giao dịch chưa thành công)
    /// </summary>
    [Table("order")]
    public partial class Order
    {
        /// <summary>
        /// Id đơn đặt hàng
        /// </summary>
        [ExplicitKey]
        public string OrderId { get; set; }

        /// <summary>
        /// Mã hóa đơn
        /// </summary>
        public string OrderCode { get; set; }

        /// <summary>
        /// Trạng thái đơn hàng
        /// </summary>
        public int OrderStatus { get; set; }

        /// <summary>
        /// Id khách hàng
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Id món ăn
        /// </summary>
        public string DishId { get; set; }

        /// <summary>
        /// Id cửa hàng
        /// </summary>
        public string ShopId { get; set; }

        /// <summary>
        /// Giá bán
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Số lượng mua
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Mã giỏ hàng
        /// </summary>
        public string CartId { get; set; }

        /// <summary>
        /// Phí ship
        /// </summary>
        public string Ship { get; set; }

        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// Ngày cập nhật trạng thái gần nhất
        /// </summary>
        public DateTime? UpdateDate { get; set; }

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
