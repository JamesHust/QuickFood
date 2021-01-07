using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using QuickFood.ApplicationCore.Repositories;
using QuickFood.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace QuickFood.Infrastructure
{
    /// <summary>
    /// Lớp base cho repository xử lý các nghiệp vụ dùng chung cho các repository
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseRepository<T> : IBaseRepository<T> where T: class
    {
        #region DECLARE
        IDbConnection db = null;
        #endregion

        /// <summary>
        /// Hàm khởi t
        /// </summary>
        public BaseRepository()
        {
            db = new MySqlConnection(Global.ConnectionString);
        }

        /// <summary>
        /// Lấy object theo id- khóa chính
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public T Get(string id)
        {
            T obj = null;
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                obj = db.Get<T>(id);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return obj;
        }

        /// <summary>
        /// Lấy toàn bộ object
        /// </summary>
        /// <returns></returns>
        public List<T> GetAll()
        {
            var listObject = new List<T>();
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                listObject = (List<T>)db.GetAll<T>();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return listObject;
        }

        /// <summary>
        /// Thêm object mới
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public T Insert(T obj)
        {
            T listObject = obj;
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                db.Insert<T>(obj);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return listObject;
        }

        /// <summary>
        /// Thêm danh sách object
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public List<T> Insert(List<T> list)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Cập nhật object
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public T Update(T obj)
        {
            T listObject = obj;
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                db.Update<T>(obj);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return listObject;
        }

        /// <summary>
        /// Cập nhật danh sách objetc
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public List<T> Update(List<T> list)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Xóa object
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool Delete(string id)
        {
            var success = false;
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                var obj = db.Get<T>(id);
                db.Delete<T>(obj);
                success = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return success;
        }

        /// <summary>
        /// Xóa danh sách object
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public bool Delete(List<T> list)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Xóa toàn bộ object
        /// </summary>
        /// <returns></returns>
        public bool DeleteAll()
        {
            var success = false;
            try
            {
                if (db.State != ConnectionState.Open)
                {
                    db.Open();
                }
                db.DeleteAll<T>();
                success = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return success;
        }
    }
}
