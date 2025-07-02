using ProductCatalogApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductCatalogApp.Services.Interfaces
{
    public interface IProductService
    {
        Task<List<ProductViewModel>> GetAllProductsWithTaxAsync();
        Task<ProductViewModel> GetProductWithTaxByIdAsync(int id);
    }
}