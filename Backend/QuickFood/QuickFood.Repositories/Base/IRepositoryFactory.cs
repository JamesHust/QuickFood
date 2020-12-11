using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.JETPAY.BillingService.Repositories.Base
{
    public interface IRepositoryFactory
    {
        IRepository<T> GetRepository<T>() where T : class;
    }
}
