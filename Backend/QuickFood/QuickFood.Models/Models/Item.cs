using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Các mục món
    /// </summary>
    [Table("item")]
    public partial class Item
    {
        /// <summary>
        /// ID mục món
        /// </summary>
        [ExplicitKey]
        public string Id { get; set; }
        /// <summary>
        /// Mã mục món 
        /// </summary>
        public int Code { get; set; }
        /// <summary>
        /// Tên các mục món
        /// </summary>
        public string Name { get; set; }
    }
}
