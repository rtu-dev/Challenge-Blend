using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlendBierShop.Models
{
    public class Bier
    {
        public int BierId { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public string ImgPath { get; set; }
    }
}
