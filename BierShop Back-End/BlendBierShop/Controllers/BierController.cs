using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BlendBierShop.Infra.Interfaces;
using BlendBierShop.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlendBierShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BierController : ControllerBase
    {
        private readonly IBierRepository _bierRepository;
        private readonly IGroupRepository _groupRepository;

        public BierController(IBierRepository bierRepository, IGroupRepository groupRepository)
        {
            _bierRepository = bierRepository;
            _groupRepository = groupRepository;
        }

        [Route("listAll")]
        [HttpGet]
        public IEnumerable Get()
        {
            return _bierRepository.GetAll();
        }

        [Route("getById")]
        [HttpGet("{id}")]
        public Bier GetById([FromQuery] int id)
        {
            return _bierRepository.GetById(id);
        }

        [Route("getByPartOfName")]
        [HttpGet("{param}")]
        public async Task<IEnumerable> GetBierByPartOfName([FromQuery] string param)
        {
            return await _bierRepository.GetBierByPartOfName(param);
        }

        [Route("getGroup")]
        [HttpGet]
        public IEnumerable GetGroup()
        {
            return _groupRepository.GetAll();
        }

        [Route("add")]
        [HttpPost]
        public bool AddBier([FromBody] Bier obj)
        {
            return _bierRepository.Add(obj);
        }

        [Route("update")]
        [HttpPut]
        public Bier Put([FromBody] Bier bier)
        {
            return _bierRepository.Update(bier);
        }

        [Route("remove")]
        [HttpDelete("{id}")]
        public void Delete([FromQuery] int id)
        {           
            _bierRepository.Remove(id);
        }

        [Route("upload")]
        [HttpPut("{path}"), DisableRequestSizeLimit]
        public IActionResult Upload([FromQuery] string path)
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    var deletePath = Path.Combine(folderName, path);

                    if (System.IO.File.Exists(deletePath))
                    {
                        System.IO.File.Delete(deletePath);
                    }

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
