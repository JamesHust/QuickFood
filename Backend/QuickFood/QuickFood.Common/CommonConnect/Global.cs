using System;
using System.Collections.Generic;
using System.Text;

namespace QuickFood.Common.CommonConnect
{
    /// <summary>
    /// Lớp lấy thông tin kết nối cơ sở dữ liệu
    /// Thông tin này được config trong appsetting
    /// </summary>
    public class Global
    {
        /// <summary>
        /// Thông tin kết nối cơ sở dữ liệu
        /// </summary>
        public static string ConnectionString { get; set; }
    }
}
