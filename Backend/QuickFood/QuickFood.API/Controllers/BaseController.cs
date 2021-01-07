using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickFood.ApplicationCore.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickFood.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BaseController<TEntity> : ControllerBase
    {
        IBaseService<TEntity> _baseService;

        /// <summary>
        /// Hàm khởi tạo
        /// </summary>
        /// <param name="baseService"></param>
        public BaseController(IBaseService<TEntity> baseService)
        {
            _baseService = baseService;
        }

        /// <summary>
        /// Lấy toàn bộ object
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            var listObj = _baseService.GetAll();
            return Ok(listObj);
        }

        /// <summary>
        /// Lấy object theo id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var obj = _baseService.Get(id);
            return Ok(obj);
        }

        /// <summary>
        /// Thêm object vào CSDL
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(TEntity entity)
        {
            var obj = _baseService.Insert(entity);
            return Ok(obj);
        }

        /// <summary>
        /// Cập nhật object
        /// </summary>
        /// <param name="id"></param>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        public IActionResult Put(TEntity entity)
        {
            var obj = _baseService.Update(entity);
            return Ok(obj);
        }

        /// <summary>
        /// Xóa object
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var obj = _baseService.Delete(id);
            return Ok(obj);
        }
    }
}
