using BlendBierShop.Infra.Interfaces;
using BlendBierShop.Models;
using BlendBierShop.Models.Data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlendBierShop.Infra.Repository
{
    public class GroupRepository : IGroupRepository
    {
        private readonly ApplicationDbContext _context;

        public GroupRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool Add(Group obj)
        {
            throw new NotImplementedException();
        }

        public IEnumerable GetAll()
        {
            return _context.Group.ToList();
        }

        public Task<IEnumerable<Group>> GetBierByPartOfName(string param)
        {
            throw new NotImplementedException();
        }

        public Group GetById(int Id)
        {
            throw new NotImplementedException();
        }

        public void Remove(int Id)
        {
            throw new NotImplementedException();
        }

        public int SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Group Update(Group obj)
        {
            throw new NotImplementedException();
        }
    }
}
