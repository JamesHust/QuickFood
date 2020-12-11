using System;
using System.Collections.Generic;

#nullable disable

namespace QuickFood.Models.Models
{
    public partial class CustomerAddress
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string Company { get; set; }
        public string PhoneNumber { get; set; }
        public string Province { get; set; }
        public string District { get; set; }
        public string Ward { get; set; }
        public string Address { get; set; }
        public int TypeAddress { get; set; }
        public string CustomerId { get; set; }
        public int AddressDefault { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
