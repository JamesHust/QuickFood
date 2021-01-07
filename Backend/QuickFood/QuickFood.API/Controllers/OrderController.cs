using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickFood.ApplicationCore.Interfaces;
using QuickFood.Models.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickFood.API.Controllers
{
    public class OrderController : BaseController<Order>
    {
        IBaseService<Order> _baseService;
        public OrderController(IBaseService<Order> baseService) : base(baseService)
        {
            _baseService = baseService;
        }
    }
}
