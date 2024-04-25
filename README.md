<h2 align="center"> ExpressJS API Framework </h2>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS-grey?logo=node.js)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/expressJs-framework.git
2. Navigate to `expressJs-framework`
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
npm run devStart [ only for developement ]
npm start
```

Run tests:
```
npm test
```

### Folder structure
```
├───src
|    ├───app
|    |    ├───controllers
|    |    ├───routes
|    |    └───index.js
|    ├───helper
|    ├───static
|    └───tests
|         ├───config
|         ├───payload
|         └───specs
├───.env
├───.gitignore
├───index.js
├───package-lock.json
├───package.json
└───README.md
```

### Test report
![image](https://user-images.githubusercontent.com/65847528/148164798-04a901fe-576d-4aad-a9d0-fbbcf670b905.png)
