using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Món ăn
    /// </summary>
    [Table("dish")]
    public partial class Dish
    {
        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        public Dish()
        {
            Orders = new HashSet<Order>();
        }

        /// <summary>
        /// Id món ăn
        /// </summary>
        [ExplicitKey]
        public string Id { get; set; }

        /// <summary>
        /// Mã món ăn
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// Tên món ăn
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Id shop
        /// </summary>
        public string ShopId { get; set; }

        /// <summary>
        /// ID mục món
        /// </summary>
        public string ItemId { get; set; }

        /// <summary>
        /// Id loại món ăn
        /// </summary>
        public string CategoryId { get; set; }

        /// <summary>
        /// Giá bán sản phẩm
        /// </summary>
        public string Price { get; set; }

        /// <summary>
        /// Mô tả sản phẩm
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Ảnh minh họa cho món ăn
        /// </summary>
        public string Img { get; set; }

        /// <summary>
        /// Kiểu món (0- Đồ ăn,  1-Đồ uống)
        /// </summary>
        public int TypeFood { get; set; }

        /// <summary>
        /// Còn hàng (0-Hết hàng, 1-Còn hàng)
        /// </summary>
        public int Stocking { get; set; }

        /// <summary>
        /// Số lượng món ăn trong ngày
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Có giảm giá không (0-Không,  1-Có)
        /// </summary>
        public int IsSale { get; set; }

        /// <summary>
        /// Phần trăm giảm giá (Chỉ có khi IsSale là 1)
        /// </summary>
        public int? SalePercent { get; set; }

        /// <summary>
        /// Giá tạm thời ( Chỉ có khi SalePercent khác 0)
        /// </summary>
        public string TemporaryPrice { get; set; }

        #region Auto gen
        /// <summary>
        /// Loại món
        /// </summary>
        public virtual Category Category { get; set; }

        /// <summary>
        /// Mục món
        /// </summary>
        public virtual Item Item { get; set; }

        /// <summary>
        /// Cửa hàng - shop
        /// </summary>
        public virtual Shop Shop { get; set; }

        /// <summary>
        /// Món ăn đã bán được - Xem lại
        /// </summary>
        public virtual DishSold DishSold { get; set; }

        /// <summary>
        /// Danh sách order
        /// </summary>
        public virtual ICollection<Order> Orders { get; set; }
        #endregion
    }
}
