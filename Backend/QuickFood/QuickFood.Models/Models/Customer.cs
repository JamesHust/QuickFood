using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Khách hàng
    /// </summary>
    [Table("customer")]
    public partial class Customer
    {
        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        public Customer()
        {
            CustomerAddresses = new HashSet<CustomerAddress>();
            Orders = new HashSet<Order>();
        }

        /// <summary>
        /// Id khách hàng
        /// </summary>
        [ExplicitKey]
        public string Id { get; set; }

        /// <summary>
        /// Mã khách hàng
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// Họ tên khách hàng
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Địa chỉ email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Giới tính ( 0-Nữ, 1-Nam, 2-Khác)
        /// </summary>
        public int? Gender { get; set; }

        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime? Birthday { get; set; }

        /// <summary>
        /// Mật khẩu
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Ảnh đại diện khách hàng
        /// </summary>
        public string Avatar { get; set; }

        /// <summary>
        /// Danh sách địa chỉ - Tự gen, xem lại
        /// </summary>
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }

        /// <summary>
        /// Danh sách order
        /// </summary>
        public virtual ICollection<Order> Orders { get; set; }
    }
}
