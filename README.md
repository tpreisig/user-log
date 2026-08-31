# User Log 

A lightweight Express.js app that serves as a user authentication demo with static HTML pages, registration/login forms, and request logging. 

![screenshot](/assets/registerLog.png)
![screenshot](/assets/userLog.png)
![screenshot](/assets/register.png)


## Overview

This project serves as Node.js web app for experimenting with:

- Express route handling
- static page serving
- form-based login and registration flows
- password hashing with bcrypt
- request logging for submitted user data
- basic 404/error handling

The application is intentionally kept simple and is best thought of as a demo or starter project rather than a production-ready auth system. User data from authentication and authorization are logged to a respective file in a `logs` directory which is created for the first registration/login.
`
## Features

- Home, About, Contact, Login, and Register views
- Express app serving static assets from the public folder
- Login and registration POST routes
- Password hashing before logging authentication data
- Timestamped log entries saved under the logs directory
- 404 page for missing routes
- Optional custom port via `PORT_ASSIGNMENT`

## Tech stack

- Node.js
- Express
- bcryptjs
- date-fns
- dotenv
- nodemon

## Project layout

```text
.
├── middleware/
│   ├── entryLog.js
│   └── errorHandler.js
├── public/
│   ├── inside.css
│   ├── login.css
│   ├── register.css
│   └── style.css
├── routes/
│   └── route.js
├── views/
│   ├── 404.html
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   ├── inside.html
│   ├── login.html
│   └── register.html
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open the app in a browser:

   ```text
   http://localhost:3232
   ```

4. For development with automatic restarts:

   ```bash
   npm run dev
   ```

## Environment variables

The app reads an optional environment variable for the server port:

```bash
PORT_ASSIGNMENT=4000 npm start
```

If `PORT_ASSIGNMENT` is not set, the app defaults to port `3232`.

## Notes

- This app does not persist users in a database.
- Submitted credentials are not used as a production authentication system and should not be treated as secure storage.
- The app creates a `logs/` folder automatically when logging entries is enabled.

## License

This project is licensed under the ISC License.
