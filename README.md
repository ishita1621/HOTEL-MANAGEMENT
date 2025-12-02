WanderLust
A simple full-stack CRUD application built with Node.js, Express, EJS and MongoDB (Mongoose).
This project contains two main features you worked on: a Chit-Chat (messaging) style CRUD flow and a Hotel / Listing Management CRUD flow (add / edit / delete / show).

Features
Create / Read / Update / Delete (CRUD) for listings (hotel details).
Simple messaging / chat style CRUD (send, edit, delete messages).
Server-side rendered views using EJS (templating).
Mongoose schemas for MongoDB persistence.
Clean layout partials (navbar, footer, boilerplate layout).
Static assets served from public/ (CSS).

Tech Stack
Node.js
Express.js
MongoDB with Mongoose
EJS (Embedded JavaScript templates)
Bootstrap / CSS (static files)

Project Structure (based on your folders)
MAJOR-PROJECT/
├─ app.js                      # main Express app
├─ package.json
├─ package-lock.json
├─ init/
│  ├─ data.js                  # seed or sample data
│  └─ index.js                 # initializer / seeder script
├─ models/
│  └─ listing.js               # Mongoose schema for listings (hotels)
├─ public/
│  └─ css/                     # stylesheets
├─ views/
│  ├─ includes/
│  │  ├─ navbar.ejs
│  │  └─ footer.ejs
│  ├─ layouts/
│  │  └─ boilerplate.ejs
│  └─ listings/
│     ├─ index.ejs
│     ├─ new.ejs
│     ├─ edit.ejs
│     └─ show.ejs
└─ node_modules/

Quick Setup (local)

Make sure you have Node.js and MongoDB installed (or use MongoDB Atlas).

Clone repository

git clone <your-repo-url>
cd MAJOR-PROJECT


Install dependencies

npm install


Environment variables

Create a .env file in the root (or set environment variables) with at least:

PORT=3000
MONGO_URI=mongodb://localhost:27017/majorproject

Run the app
npm start
# or if you use nodemon
npx nodemon app.js
Open http://localhost:3000 (or http://localhost:<PORT>).

Typical Routes / Endpoints

Listings (examples — adapt to your route names in app.js)

GET /listings — list all listings (renders views/listings/index.ejs)

GET /listings/new — form to create a new listing (views/listings/new.ejs)

POST /listings — create listing (form submission)

GET /listings/:id — show a single listing (views/listings/show.ejs)

GET /listings/:id/edit — form to edit a listing (views/listings/edit.ejs)

PUT /listings/:id — update listing (usually via method-override)

DELETE /listings/:id — delete listing

Notes

If you use HTML forms for PUT/DELETE, ensure you use method-override middleware or use POST routes with different endpoints.

For Chat / Messages, analogous routes might be:

GET /messages

POST /messages

PUT /messages/:id

DELETE /messages/:id


Useful npm packages to have (if not already)
npm install express mongoose ejs body-parser method-override dotenv

express — web framework

mongoose — MongoDB ODM

ejs — templating engine

method-override — support PUT/DELETE from forms



