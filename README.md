<h2 align="center"> ExpressJS API Framework </h2>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/ExpressJSFramework.git
2. Navigate to `ExpressJSFramework`
```

Install the dependencies:
```bash
npm install
```

### API Details
```
BaseURL: http://localhost:5000
GET: /users
POST: /users (with payload)
PATCH: /users/:id (with payload)
DELETE: /users/:id
```

Start server:
```
npm start
```

### Folder structure
```
├───app
|    ├───controllers
|    |     └───users.js
|    └───routes
|          └───users.js
├───static
|    └───constants.js
├───tests
|    ├───payload
|    |     └───users.js
|    └───specs
|          └───users.spec.js
├───.gitignore
├───index.js
├───package-lock.json
├───package.json
└───README.md
```

### Test report
![image](https://user-images.githubusercontent.com/65847528/148164798-04a901fe-576d-4aad-a9d0-fbbcf670b905.png)