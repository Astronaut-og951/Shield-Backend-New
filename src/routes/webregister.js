const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const functions = require("../utils/funcs/functions.js");

app.get('/webregister', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Page</title>
      </head>
      <body>
        <h1>Register</h1>
        <form action="/register" method="POST">
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
          </div>
            <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button type="submit">Register</button>
        </form>
      </body>
      </html>
    `);
  });
  
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    try {
        functions.createAccountWeb(username, email, password);
        res.send(`
            <h2>Successfully created an account with the username ${username}</h2>
            <p>Welcome to Lexia!</p>
            <a href="/webregister">Back to Register</a>
          `);
    } catch {
        res.send(`
            <h2>Failed to create an Lexia Account!</h2>
            <p>Please contact support or create an issue on our github! git: https://github.com/tevahasdev/Lexia-backend</p>
            <a href="/webregister">Back to Register</a>
          `);
    }
});

module.exports = app;