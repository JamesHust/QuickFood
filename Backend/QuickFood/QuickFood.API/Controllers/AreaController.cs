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
    public class AreaController : BaseController<Area>
    {
        IBaseService<Area> _baseService;
        public AreaController(IBaseService<Area> baseService) : base(baseService)
        {
            _baseService = baseService;
        }
    }
}
