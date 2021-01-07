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
    public class CartController : BaseController<Cart>
    {
        IBaseService<Cart> _baseService;
        public CartController(IBaseService<Cart> baseService) : base(baseService)
        {
            _baseService = baseService;
        }
    }
}
