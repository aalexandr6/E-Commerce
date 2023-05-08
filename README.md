# Object-Relational Mapping (ORM) E-Commerce Back End

## Object-Relational Mapping

Object-relational mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

## Project Description

This is a back-end application for an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database.

## Installation

To install necessary dependencies, run the following command:

```bash
myql -u root -p
exit;
npm install
npm run seeds
npm start
```

## Express.js API

- `server.js` - The entry point to the application. This file establishes the connection to the server and syncs the Sequelize models to the MySQL database.

- `config/connection.js` - The code to connect Node to MySQL is located here. This file is imported into `server.js`.

- `api` - The code for the API routes is located here. This file is imported into `server.js`.

- `models` - The code for the database models is located here. This file is imported into `api` folder.

- `seeds` - The code to seed the database with test data is located here. This file is imported into `server.js`.

## DOTENV

zero-dependency module that loads environment variables from a .env file into process.env.

## MySQL2

MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more.

## Sequelize

- `config` - The code to connect Node to MySQL is located here. This file is imported into `server.js`.

- `models` - The code for the database models is located here. This file is imported into `api` folder.

- `seeds` - The code to seed the database with test data is located here. This file is imported into `server.js`.

## Database Models

The database contains four models:

- `Category` - The `Category` model contains a `category_name` property.

- `Product` - The `Product` model contains `product_name`, `price`, `stock`, and `category_id` properties.

- `Tag` - The `Tag` model contains a `tag_name` property.

- `ProductTag` - The `ProductTag` model contains `product_id` and `tag_id` properties.

## API Routes

The following API routes are available:

### Category

- `GET /api/categories` - Returns all categories.

- `GET /api/categories/:id` - Returns a single category based on the `id` parameter.

- `POST /api/categories` - Creates a new category.

- `PUT /api/categories/:id` - Updates a category based on the `id` parameter.

- `DELETE /api/categories/:id` - Deletes a category based on the `id` parameter.

### Product

- `GET /api/products` - Returns all products.

- `GET /api/products/:id` - Returns a single product based on the `id` parameter.

- `POST /api/products` - Creates a new product.

- `PUT /api/products/:id` - Updates a product based on the `id` parameter.

- `DELETE /api/products/:id` - Deletes a product based on the `id` parameter.

### Tag

- `GET /api/tags` - Returns all tags.

- `GET /api/tags/:id` - Returns a single tag based on the `id` parameter.

- `POST /api/tags` - Creates a new tag.

- `PUT /api/tags/:id` - Updates a tag based on the `id` parameter.

- `DELETE /api/tags/:id` - Deletes a tag based on the `id` parameter.

## Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Walkthrough

**💿** [Ecommerce 🎥](https://drive.google.com/file/d/1Cx8UgidWp_lemlRgvVr0FQJoc5NqHrO9/view)

## Questions

[aalexandr6](https://github.com/aalexandr6) at aalexanderp6@gmail.com.
