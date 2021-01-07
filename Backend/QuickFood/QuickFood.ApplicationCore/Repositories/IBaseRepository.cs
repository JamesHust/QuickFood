using System;
using System.Collections.Generic;

namespace QuickFood.ApplicationCore.Repositories
{
    /// <summary>
    /// Lớp interface cho xử lý tương tác vs CSDL
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IBaseRepository<TEntity>
    {
        /// <summary>
        /// Lấy object theo id- khóa chính
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity Get(string id);

        /// <summary>
        /// Lấy toàn bộ object
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <returns></returns>
        List<TEntity> GetAll();

        /// <summary>
        /// Thêm 1 object
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        TEntity Insert(TEntity obj);

        /// <summary>
        /// Thêm danh sách object
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        List<TEntity> Insert(List<TEntity> list);

        /// <summary>
        /// Cập nhật object
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        TEntity Update(TEntity obj);

        /// <summary>
        /// Cập nhật danh sách object
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        List<TEntity> Update(List<TEntity> list);

        /// <summary>
        /// Xóa object
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        bool Delete(string id);

        /// <summary>
        /// Xóa danh sách object
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        bool Delete(List<TEntity> list);

        /// <summary>
        /// Xóa toàn bộ object
        /// </summary>
        /// <returns></returns>
        bool DeleteAll();
    }
}
