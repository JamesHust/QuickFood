using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.JETPAY.BillingService.Repositories.Base
{
    public class UnitOfWork<TContext> : IRepositoryFactory, IUnitOfWork<TContext>, IUnitOfWork
         where TContext : DbContext, IDisposable
    {
        private Dictionary<Type, object> _repositories;

        public TContext Context { get; }
        public UnitOfWork(TContext context)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public IRepository<TEntity> GetRepository<TEntity>() where TEntity : class
        {
            if (_repositories == null) _repositories = new Dictionary<Type, object>();

            var type = typeof(TEntity);
            if (!_repositories.ContainsKey(type)) _repositories[type] = new Repository<TEntity>(Context);
            return (IRepository<TEntity>)_repositories[type];
        }

        public int SaveChanges()
        {
            try
            {
                return Context.SaveChanges();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                throw ;
            }
        }

        public void Dispose()
        {
            Context?.Dispose();
        }
    }
}
