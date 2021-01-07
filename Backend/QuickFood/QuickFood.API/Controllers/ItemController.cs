using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickFood.ApplicationCore.Interfaces;
using QuickFood.Models.Models;


namespace QuickFood.API.Controllers
{
    public class ItemController : BaseController<Item>
    {
        IBaseService<Item> _baseService;
        public ItemController(IBaseService<Item> baseService) : base(baseService)
        {
            _baseService = baseService;
        }
    }
}
