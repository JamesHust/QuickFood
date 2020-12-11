using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class Shop
    {
        public Shop()
        {
            Orders = new HashSet<Order>();
        }

        public string ShopId { get; set; }
        public string ShopCode { get; set; }
        public string Name { get; set; }
        public string PeopleInvolve { get; set; }
        public int Titular { get; set; }
        public string Tax { get; set; }
        public int Position { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string PhoneOther { get; set; }
        public string IdentityCode { get; set; }
        public string BeforeIdentityCardImg { get; set; }
        public string BehindIdentityCardImg { get; set; }
        public string BusinessRegistration { get; set; }
        public string Avatar { get; set; }
        public string FrontShopImg { get; set; }
        public string Province { get; set; }
        public string District { get; set; }
        public string Ward { get; set; }
        public string Address { get; set; }
        public string KeyWord { get; set; }
        public string Description { get; set; }
        public int TypeShop { get; set; }
        public int Purpose { get; set; }
        public int ForCustomer { get; set; }
        public int Cuisine { get; set; }
        public string SpecialDishes { get; set; }
        public string MenuImg { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime ConfirmDate { get; set; }

        public virtual AdminShop AdminShop { get; set; }
        public virtual Dish Dish { get; set; }
        public virtual DishSold DishSold { get; set; }
        public virtual ScheduleShop ScheduleShop { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
