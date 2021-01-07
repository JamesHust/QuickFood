using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Khu vực (địa chỉ)
    /// </summary>
    [Table("area")]
    public partial class Area
    {
        /// <summary>
        /// Id khu vực
        /// </summary>
        [ExplicitKey]
        public string Id { get; set; }

        /// <summary>
        /// Mã khu vực
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// Tên khu vực
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Loại khu vực
        /// </summary>
        public int Kind { get; set; }
    }
}
