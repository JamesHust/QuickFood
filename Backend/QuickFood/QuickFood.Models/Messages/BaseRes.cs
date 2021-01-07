using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.JETPAY.BillingService.Models.Messages
{
    public class BaseRes<T>
    {
        /// <summary>
        /// API có thành công hay không
        /// </summary>
        public bool IsSuccess { get; set; }
        /// <summary>
        /// Mã lỗi HTTP trả về
        /// </summary>
        public int HttpCode { get; set; }
        /// <summary>
        /// Mã lỗi logic của hệ thống
        /// </summary>
        public string ErrorCode { get; set; }
        /// <summary>
        /// Mô tả lỗi để dev sử dụng
        /// </summary>
        public string DevMsg { get; set; }
        /// <summary>
        /// Mô tả lỗi cho khách hàng
        /// </summary>
        public string UserMsg { get; set; }
        /// <summary>
        /// Thông tin thêm
        /// </summary>
        public string MoreInfo { get; set; }
        /// <summary>
        /// Id để trace log
        /// </summary>
        public string TraceId { get; set; }
        /// <summary>
        /// Data tả về của API
        /// </summary>
        public T Data { get; set; }
        /// <summary>
        /// Hàm khởi tạo mặc định
        /// </summary>
        public BaseRes()
        {
            IsSuccess = false;
            HttpCode = 500;
            Data = default(T);
        }
    }
}
