using ProductCatalogApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProductCatalogApp.Services.Interfaces
{
    public interface IProductApiClient
    {
        Task<List<Product>> GetProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
    }
}