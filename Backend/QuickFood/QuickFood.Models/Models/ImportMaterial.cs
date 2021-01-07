using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Thông tin nhập hàng
    /// </summary>
    [Table("import_material")]
    public partial class ImportMaterial
    {
        /// <summary>
        /// Id cửa hàng
        /// </summary>
        public int ShopId { get; set; }

        /// <summary>
        /// Mô tả thông tin nhập hàng
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Tổng tiền
        /// </summary>
        public string TotalCost { get; set; }

        /// <summary>
        /// Ngày nhập
        /// </summary>
        public DateTime ImportDate { get; set; }

        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreateDate { get; set; }

        /// <summary>
        /// Ngày cập nhật thông tin
        /// </summary>
        public DateTime UpdateDate { get; set; }
    }
}
