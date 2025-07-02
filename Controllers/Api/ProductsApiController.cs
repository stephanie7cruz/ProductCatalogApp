using Microsoft.AspNetCore.Mvc;
using ProductCatalogApp.Models;
using ProductCatalogApp.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductCatalogApp.Controllers.Api
{
    [Route("api/products")]
    [ApiController]
    public class ProductsApiController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsApiController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductViewModel>>> GetProducts()
        {
            var products = await _productService.GetAllProductsWithTaxAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductViewModel>> GetProductById(int id)
        {
            var product = await _productService.GetProductWithTaxByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}