using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    /// <summary>
    /// Thông tin chi tiết cửa hàng
    /// </summary>
    [Table("shop")]
    public partial class Shop
    {
        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        public Shop()
        {
            Orders = new HashSet<Order>();
        }

        /// <summary>
        /// Id cửa hàng
        /// </summary>
        [ExplicitKey]
        public string ShopId { get; set; }

        /// <summary>
        /// Mã cửa hàng
        /// </summary>
        public string ShopCode { get; set; }

        /// <summary>
        /// Tên cửa hàng
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Tên người đại diện cửa hàng
        /// </summary>
        public string PeopleInvolve { get; set; }

        /// <summary>
        /// Đăng ký dưới danh nghĩa (0-Cá nhân, 1-Công ty)
        /// </summary>
        public int Titular { get; set; }

        /// <summary>
        /// Mã số thuế
        /// </summary>
        public string Tax { get; set; }

        /// <summary>
        /// Vị trí/Chức vụ (0-Nhân viên, 1-Quản lý)
        /// </summary>
        public int Position { get; set; }

        /// <summary>
        /// Email liên hệ cửa hàng
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        /// Số điện thoại khác
        /// </summary>
        public string PhoneOther { get; set; }

        /// <summary>
        /// Số chứng minh thư/CMND/Thẻ căn cước của người đại diện
        /// </summary>
        public string IdentityCode { get; set; }

        /// <summary>
        /// Ảnh mặt trước chứng minh thư/CMND/Thẻ căn cước
        /// </summary>
        public string BeforeIdentityCardImg { get; set; }

        /// <summary>
        /// Ảnh mặt sau chứng minh thư/CMND/Thẻ căn cước
        /// </summary>
        public string BehindIdentityCardImg { get; set; }

        /// <summary>
        /// Ảnh giấy phép đăng ký kinh doanh
        /// </summary>
        public string BusinessRegistration { get; set; }

        /// <summary>
        /// Ảnh đại diện quán
        /// </summary>
        public string Avatar { get; set; }

        /// <summary>
        /// Ảnh mặt tiền quán
        /// </summary>
        public string FrontShopImg { get; set; }

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
        /// Địa chỉ (Số nhà và đường phố)
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Từ khóa tìm kiếm
        /// </summary>
        public string KeyWord { get; set; }

        /// <summary>
        /// Mô tả về quán
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Loại hình quán -- cái này sẽ bổ sung bảng sau
        /// </summary>
        public int TypeShop { get; set; }

        /// <summary>
        /// Mục đích
        /// </summary>
        public int Purpose { get; set; }

        /// <summary>
        /// Đối tượng khách hàng
        /// </summary>
        public int ForCustomer { get; set; }

        /// <summary>
        /// Ẩm thực vùng nào
        /// </summary>
        public int Cuisine { get; set; }

        /// <summary>
        /// Món đặc biệt
        /// </summary>
        public string SpecialDishes { get; set; }

        /// <summary>
        /// Ảnh menu/thực đơn
        /// </summary>
        public string MenuImg { get; set; }

        /// <summary>
        /// Ngày tạo cửa hàng 
        /// </summary>
        public DateTime? CreateDate { get; set; }

        /// <summary>
        /// Ngày được xác nhận hợp đồng
        /// </summary>
        public DateTime ConfirmDate { get; set; }

        #region Auto gen
        /// <summary>
        /// Tài khoản Admin
        /// </summary>
        public virtual AdminShop AdminShop { get; set; }

        /// <summary>
        /// Món ăn
        /// </summary>
        public virtual Dish Dish { get; set; }

        /// <summary>
        /// Món ăn đã bán được
        /// </summary>
        public virtual DishSold DishSold { get; set; }

        /// <summary>
        /// Lịch mở quán
        /// </summary>
        public virtual ScheduleShop ScheduleShop { get; set; }

        /// <summary>
        /// Danh sách đơn hàng
        /// </summary>
        public virtual ICollection<Order> Orders { get; set; }
        #endregion
    }
}
