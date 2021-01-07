using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Vị trí, chức vụ trong cửa hàng
    /// </summary>
    [Table("position_shop")]
    public partial class PositionShop
    {
        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        public PositionShop()
        {
            AdminShops = new HashSet<AdminShop>();
        }

        /// <summary>
        /// Mã vị trí
        /// </summary>
        [ExplicitKey]
        public int Code { get; set; }

        /// <summary>
        /// Tên vị trí
        /// </summary>
        public string Name { get; set; }

        #region Auto gen
        /// <summary>
        /// Danh sách tài khoản admin
        /// </summary>
        public virtual ICollection<AdminShop> AdminShops { get; set; }
        #endregion
    }
}
