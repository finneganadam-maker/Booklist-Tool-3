# Booklist-Tool

A simple web app to manage a reading list. You can add books, edit them and delete them. All books are saved in a databse so they stay there even after you restart the server.

I built this during my web development course to learn Node.js and MongoDB.

## Tech Stack

- **Node.js** - server runtime, we use this in our course for the backend
- **Express.js** - web framework for Node, makes routing much easier
- **EJS** - templating engine, renders HTML on the server with real data from the databse
- **MongoDB** - to save the books so they dont disappear when the server restarts
- **Mongoose** - makes it easier to work with MongoDB, you can define what fields a book has
- **dotenv** - for environment variables, important so passwords are not in the code

## How it works

There is server-side and client-side stuff in this app.

Server-side: Express loads the books from MongoDB and EJS puts them into the HTML before it gets sent to the browser. So the browser already gets the finished page with all the data.

Client-side: the search filter and character counter run in the browser with app.js. No reload needed for that.

For editing and deleting a specific book the route uses `:id` so one route works for all books depending on which one you click.

## Features

- View all books in your list
- Add a new book (titel, autor, pages, read status)
- Edit a existing book
- Delete a book (with confirmation dialog)
- Search and filter books by titel or autor (client-side, no reload)
- Character counter for the title field

## How to install

```bash
git clone https://github.com/finneganadam-maker/Booklist-Tool-2
cd Booklist-Tool
npm install
```

Then create a `.env` file in the root folder:

```
MONGODB_URI=mongodb://127.0.0.1:27017/buecherliste
PORT=3000
```

For deployment use a MongoDB Atlas connection string instead.

## How to run

```bash
node server.js
```

Then open http://localhost:3000 in your browser.

## Live Version

Live version: [URL coming soon]
