$(document).ready(function () {
    const productResultsDiv = $('#productResults');
    const productIdInput = $('#productIdInput');
    const searchProductBtn = $('#searchProductBtn');

    // Función para mostrar la lista de productos en una tabla
    function displayProducts(products) {
        if (!products || products.length === 0) {
            productResultsDiv.html('<div class="alert alert-warning" role="alert">No products found.</div>');
            return;
        }

        let tableHtml = `
            <table class="table table-striped table-hover mt-3">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Tax (19%)</th>
                        <th>Price with Tax</th>
                        <th>Image</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
        `;

        products.forEach(product => {
            tableHtml += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.description}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>$${product.tax.toFixed(2)}</td>
                    <td>$${product.priceWithTax.toFixed(2)}</td>
                    <td><img src="${product.image}" alt="${product.title}" class="img-thumbnail" style="width: 50px; height: 50px; object-fit: cover;"></td>
                    <td>${product.category ? product.category.name : 'N/A'}</td>
                </tr>
            `;
        });

        tableHtml += `
                </tbody>
            </table>
        `;
        productResultsDiv.html(tableHtml);
    }

    // Función para mostrar un solo producto
    function displayProduct(product) {
        if (!product) {
            productResultsDiv.html('<div class="alert alert-warning" role="alert">Product not found.</div>');
            return;
        }

        let productHtml = `
            <div class="card mt-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}" style="object-fit: cover; height: 100%; width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${product.title} (ID: ${product.id})</h5>
                            <p class="card-text">${product.description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Price:</strong> $${product.price.toFixed(2)}</li>
                                <li class="list-group-item"><strong>Tax (19%):</strong> $${product.tax.toFixed(2)}</li>
                                <li class="list-group-item"><strong>Price with Tax:</strong> $${product.priceWithTax.toFixed(2)}</li>
                                <li class="list-group-item"><strong>Category:</strong> ${product.category ? product.category.name : 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productResultsDiv.html(productHtml);
    }

    // Manejador del evento click del botón de búsqueda
    searchProductBtn.on('click', function () {
        const productId = productIdInput.val().trim();
        productResultsDiv.html('<div class="text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>'); // Mostrar spinner de carga

        if (productId === '') {
            // Si el campo está vacío, obtener todos los productos
            $.ajax({
                url: '/api/products',
                method: 'GET',
                success: function (data) {
                    displayProducts(data);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching all products:', error);
                    productResultsDiv.html('<div class="alert alert-danger" role="alert">Error loading products. Please try again later.</div>');
                }
            });
        } else {
            // Si el campo tiene un ID, obtener el producto específico
            if (!isNaN(productId) && parseInt(productId) > 0) {
                $.ajax({
                    url: `/api/products/${productId}`,
                    method: 'GET',
                    success: function (data) {
                        displayProduct(data);
                    },
                    error: function (xhr, status, error) {
                        if (xhr.status === 404) {
                            productResultsDiv.html('<div class="alert alert-info" role="alert">Product with ID ' + productId + ' not found.</div>');
                        } else {
                            console.error(`Error fetching product by ID ${productId}:`, error);
                            productResultsDiv.html('<div class="alert alert-danger" role="alert">Error loading product. Please try again later.</div>');
                        }
                    }
                });
            } else {
                productResultsDiv.html('<div class="alert alert-danger" role="alert">Please enter a valid Product ID.</div>');
            }
        }
    });

    // Cargar todos los productos al cargar la página inicialmente
    searchProductBtn.click(); // Simula un clic en el botón para cargar todos los productos al inicio.
});