# ProductCatalogApp

This is a .NET Core MVC application for a product catalog, demonstrating backend and frontend development, consuming external APIs, calculating taxes, and displaying information to the user.

## Features

* **Backend:**
    * ASP.NET Core MVC with C#
    * REST API Consumption: `https://api.escuelajs.co/api/v1/products`
    * Business Logic Layer for tax calculation (19% of the price)
    * Web API Controller to expose product data
    * Dependency Injection (DI) for a clean architecture
* **Frontend:**
    * HTML, CSS (Bootstrap 5)
    * JavaScript (jQuery for AJAX calls)
    * User interface to search products by ID or view all products
    * Dynamic display of product lists and details, including calculated tax.
    * Responsive design using Bootstrap.
* **Testing:**
    * Unit tests for the Business Logic Layer using xUnit and Moq.

## Design Principles and Code Practices

During the development of this application, I have applied various design principles and good coding practices to ensure a robust, maintainable, and scalable structure:

* **Layered Architecture (N-tier):** I have separated the application into distinct layers (Presentation, Business Logic, and Data Access). This allows me to improve modularity, facilitate code maintainability, and prepare the application for future scalability.
* **Dependency Injection (DI):** I have utilized ASP.NET Core's built-in Dependency Injection container. This enables me to inject dependencies (such as `IProductApiClient` into `ProductService`), which significantly simplifies unit testing and helps reduce coupling between components.
* **Single Responsibility Principle (SRP):** I have ensured that each class and method has only one reason to change. For example, `ProductApiClient` is solely responsible for external API calls, while `ProductService` focuses exclusively on business logic, such as tax calculation.
* **Open/Closed Principle (OCP):** Classes are designed to be open for extension but closed for modification. This means I can, for instance, add new `IProductApiClient` implementations without needing to modify existing code in `ProductService`.
* **Dependency Inversion Principle (DIP):** I have aimed for high-level modules (like the Business Logic Layer - BLL) not to depend directly on low-level implementations (like the Data Access Layer - DAL), but rather on abstractions (interfaces). This is effectively achieved through dependency injection.
* **Encapsulation:** The internal details of classes are encapsulated, and only exposed through well-defined interfaces, thereby controlling access and interaction with objects.
* **Object-Oriented Programming (OOP):** I have applied the fundamentals of OOP, using classes, objects, interfaces, and abstractions to model the solution in a structured manner.
* **Async/Await:** I have made extensive use of the `async` and `await` keywords for I/O operations, such as external API calls. This ensures that the application remains responsive and improves its scalability by not blocking the main thread.
* **Basic Error Handling:** I have included basic error handling, such as `response.EnsureSuccessStatusCode()` in the API client and result handling in the frontend JavaScript. In a production environment, this aspect would need to be strengthened with a more robust and centralized error handling strategy.
* **Separation of Concerns (SoC):** I have maintained a clear separation between HTML, CSS, and JavaScript, organizing them into their respective directories. Furthermore, the frontend logic is clearly differentiated from the backend logic, contributing to a more organized and manageable codebase.

## Prerequisites

* .NET SDK 8.0 (or higher)
* Visual Studio 2022 (or higher)

## Setup and Run

1.  **Clone the repository:**
    ```bash
    git clone [[https://github.com/YourUsername/ProductCatalogApp.git](https://github.com/YourUsername/ProductCatalogApp.git](https://github.com/stephanie7cruz/ProductCatalogApp.git))
    cd ProductCatalogApp
    ```

2.  **Open in Visual Studio:**
    Open the `ProductCatalogApp.sln` file in Visual Studio 2022.

3.  **Restore NuGet Packages:**
    Visual Studio should automatically restore the NuGet packages. If not, you can manually restore them by:
    * Right-clicking on the solution in Solution Explorer.
    * Selecting "Restore NuGet Packages".

4.  **Build the Solution:**
    * From the Visual Studio menu, go to "Build" -> "Build Solution" (or press `Ctrl+Shift+B`).

5.  **Run the Application:**
    * Press `F5` or click the "IIS Express" button (or "ProductCatalogApp" button) in Visual Studio to run the application.
    * The application will open in your default web browser, typically at `https://localhost:xxxx/` (where xxxx is a port number).

## Running Unit Tests

1.  **Open Test Explorer:**
    * In Visual Studio, go to "Test" -> "Test Explorer".

2.  **Run Tests:**
    * Click "Run All Tests" in the Test Explorer window.
    * You should see the unit tests for the `ProductService` passing.


---
![Screenshot 2025-07-02 141234](https://github.com/user-attachments/assets/8f50ce63-297d-4bcc-b1ea-0fae8759ecaa)
![Screenshot 2025-07-02 141212](https://github.com/user-attachments/assets/1e1bb300-c1cd-4795-8238-e654d8ee2154)
![Screenshot 2025-07-02 140913](https://github.com/user-attachments/assets/5da76721-c0d2-4175-a82d-8123efd97de5)
