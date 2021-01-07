using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Hóa đơn đã nhận
    /// </summary>
    [Table("received_order")]
    public partial class ReceivedOrder
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
        /// Id quản lý cửa hàng đã nhận đơn
        /// </summary>
        public string AdminShopReceivedId { get; set; }

        /// <summary>
        /// Id khách hàng
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Tên món ăn
        /// </summary>
        public string ShopId { get; set; }

        /// <summary>
        /// Id món ăn
        /// </summary>
        public string DishId { get; set; }

        /// <summary>
        /// Giá bán
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Số lượng mua
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Phí ship
        /// </summary>
        public string Ship { get; set; }

        /// <summary>
        /// Ngày nhận hóa đơn
        /// </summary>
        public DateTime ReceivedDate { get; set; }

        #region Auto gen
        /// <summary>
        /// Admin nhận hóa đơn
        /// </summary>
        public virtual AdminShop AdminShopReceived { get; set; }

        /// <summary>
        /// Khách hàng đặt đơn
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
