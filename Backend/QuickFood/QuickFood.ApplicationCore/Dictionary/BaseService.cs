using QuickFood.ApplicationCore.Interfaces;
using QuickFood.ApplicationCore.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickFood.ApplicationCore.Dictionary
{
    /// <summary>
    /// Base xử lý nghiệp vụ dùng chung
    /// </summary>
    public class BaseService<TEntity> : IBaseService<TEntity>
    {
        IBaseRepository<TEntity> _baseRepository;

        public BaseService(IBaseRepository<TEntity> baseRepository)
        {
            _baseRepository = baseRepository;
        }

        public TEntity Get(string id)
        {
            return _baseRepository.Get(id);
        }

        public List<TEntity> GetAll()
        {
            return _baseRepository.GetAll();
        }

        public TEntity Insert(TEntity obj)
        {
            return _baseRepository.Insert(obj);
        }

        public List<TEntity> Insert(List<TEntity> list)
        {
            return _baseRepository.Insert(list);
        }

        public TEntity Update(TEntity obj)
        {
            return _baseRepository.Update(obj);
        }

        public List<TEntity> Update(List<TEntity> list)
        {
            return _baseRepository.Update(list);
        }
        public bool Delete(string id)
        {
            return _baseRepository.Delete(id);
        }

        public bool Delete(List<TEntity> list)
        {
            return _baseRepository.Delete(list);
        }

        public bool DeleteAll()
        {
            return _baseRepository.DeleteAll();
        }
    }
}
