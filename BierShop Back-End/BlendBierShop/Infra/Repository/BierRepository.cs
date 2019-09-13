using BlendBierShop.Infra.Interfaces;
using BlendBierShop.Models;
using BlendBierShop.Models.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlendBierShop.Infra.Repository
{


    public class BierRepository : IBierRepository
    {
        private readonly ApplicationDbContext _context;

        public BierRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool Add(Bier obj)
        {
            var same = _context.Bier.FirstOrDefault(x => x.Name.Equals(obj.Name));
            if (same == null)
            {
                _context.Bier.Add(obj);
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<Bier>> GetBierByPartOfName(string param)
        {
            var result = await _context.Bier.Where(x => x.Name.Contains(param)).ToListAsync();
            return result;
        }



        public void Remove(int Id)
        {
            var obj = _context.Bier.Find(Id);
            if (obj != null)
            {
                var folderName = Path.Combine("Resources", "Images");
                var deletePath = Path.Combine(folderName, obj.ImgPath);

                if (System.IO.File.Exists(deletePath))
                {
                    System.IO.File.Delete(deletePath);
                }

                _context.Remove(obj);
                _context.SaveChanges();
            }
        }

        public Bier Update(Bier obj)
        {
            var entity = _context.Bier.FirstOrDefault(x => x.BierId.Equals(obj.BierId));

            if (entity == null)
            {
                return null;
            }

            _context.Entry(entity).CurrentValues.SetValues(obj);
            _context.SaveChanges();
            return entity;
        }

        public IEnumerable GetAll()
        {
            return _context.Bier.ToList();
        }


        public int SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Bier GetById(int Id)
        {
            return _context.Bier.Find(Id);
        }

    }
}
