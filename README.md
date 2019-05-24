# Backend-Cannabis-E-Commerce-App

This is the backend for a cannabis e-commerce platform. Users will be able to sign up and browse the catelog of products and purchase them with their credit cards through Stripe payments. The admins will be able to add, update and delete products as needed. 

## Back-End Documentation 

https://cannabis-e-commerce-apidocs.netlify.com/

## Data Schema

![Data Schema](https://raw.githubusercontent.com/tommaay/backend-cannabis-e-commerce-app/blob/master/public/images/data-structure.png)

## Deployed on Heroku

https://flower-co.herokuapp.com

## Features - Admins

- Add new products
- Update existing products
- Delete existing products
- Add and update inventory
- Add new users for admin roles
- Upload images for products
- Accept payments through Stripe

## Features - Customers

- Sign up for an account
- Browse the catelog of products
- Add products to their shopping cart
- Checkout using a credit card through Stripe

## Dependencies

- [Node.js](https://nodejs.org/) - Back end JavaScript runtime
- [cors](https://www.npmjs.com/package/cors) - package for providing a Express middleware that can be used to enable CORS
- [expressjs](https://expressjs.com/) - Node.js framework
- [json web token](https://www.npmjs.com/package/jsonwebtoken) - Implements JSON web tokens
- [knex.js](https://knexjs.org/) - SQL query builder
- [sqlite3](https://www.sqlite.org/index.html) - Library that implements SQL database engine
- [Stripe](https://stripe.com/docs) - Library to implement Stripes billing functionality
- [Cloudinary](https://www.npmjs.com/package/cloudinary) - Library to upload and store images in the cloud
- [Multer](https://www.npmjs.com/package/multer) - Middleware for handling multipart/form-data, which is primarily used for uploading files
- [API Doc](https://www.npmjs.com/package/apidoc) - Plug in that helps create API documentation from source code comments
- [JWT Decode](https://www.npmjs.com/package/jwt-decode) - Library that helps decoding JWTs token which are Base64Url encoded
