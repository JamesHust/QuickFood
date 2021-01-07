using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Quản trị cửa hàng
    /// </summary>
    [Table("admin_shop")]
    public partial class AdminShop
    {
        /// <summary>
        /// Id quản lý cửa hàng
        /// </summary>
        [ExplicitKey]
        public string Id { get; set; }

        /// <summary>
        /// Id cửa hàng
        /// </summary>
        public string ShopId { get; set; }

        /// <summary>
        /// Mã vị trí/chức vụ trong cửa hàng
        /// </summary>
        public int PositionCode { get; set; }

        /// <summary>
        /// Địa chỉ email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Mật khẩu
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        /// Ngày tạo tài khoản
        /// </summary>
        /// </summary>
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// Ngày cập nhật tài khoản gần đây nhất
        /// </summary>
        public DateTime? UpdateDate { get; set; }
    }
}
