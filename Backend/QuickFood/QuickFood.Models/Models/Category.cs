using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Loại món ăn
    /// </summary>
    [Table("category")]
    public partial class Category
    {
        /// <summary>
        /// Id loại món ăn
        /// </summary>
        [ExplicitKey]
        public string CategoryId { get; set; }

        /// <summary>
        /// Mã loại món ăn
        /// </summary>
        public int CategoryCode { get; set; }

        /// <summary>
        /// Tên loại món ăn
        /// </summary>
        public string CategoryName { get; set; }

        /// <summary>
        /// ID mục món
        /// </summary>
        public string ItemId { get; set; }

        /// <summary>
        /// Mục món
        /// </summary>
        public virtual Item Item { get; set; }

        /// <summary>
        /// Món ăn 
        /// </summary>
        public virtual Dish Dish { get; set; }
    }
}
