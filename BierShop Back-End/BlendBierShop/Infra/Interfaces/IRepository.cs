using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlendBierShop.Infra.Interfaces
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetBierByPartOfName(string param);
        bool Add(T obj);
        T GetById(int Id);
        IEnumerable GetAll();
        T Update(T obj);
        void Remove(int Id);        
        int SaveChanges();
    }
}
