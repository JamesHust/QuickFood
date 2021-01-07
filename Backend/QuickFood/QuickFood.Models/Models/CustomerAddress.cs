using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Sổ địa chỉ khách hàng
    /// </summary>
    [Table("customer_address")]
    public partial class CustomerAddress
    {
        /// <summary>
        /// Mã sổ địa chỉ
        /// </summary>
        [ExplicitKey]
        public int Id { get; set; }

        /// <summary>
        /// Tên khách hàng sẽ nhận hóa đơn
        /// </summary>
        public string CustomerName { get; set; }

        /// <summary>
        /// Công ty
        /// </summary>
        public string Company { get; set; }

        /// <summary>
        /// Số điện thoại liên hệ khi đặt đơn
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Tên tỉnh/thành phố
        /// </summary>
        public string Province { get; set; }

        /// <summary>
        /// Tên quận/huyện
        /// </summary>
        public string District { get; set; }

        /// <summary>
        /// Tên xã/phường
        /// </summary>
        public string Ward { get; set; }

        /// <summary>
        /// Địa chỉ
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Loại địa chỉ (0-Nhà riêng/Chung cư, 1-Cơ quan/Công ty)
        /// </summary>
        public int TypeAddress { get; set; }

        /// <summary>
        /// Mã khách hàng
        /// </summary>
        public string CustomerId { get; set; }

        /// <summary>
        /// Đặt địa chỉ mặc định (1-Đặt, 2-Không đặt)
        /// </summary>
        public int AddressDefault { get; set; }

        /// <summary>
        /// Khách hàng
        /// </summary>
        public virtual Customer Customer { get; set; }
    }
}
