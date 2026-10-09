# Student Management REST API

A basic REST API built with Node.js and Express. It uses an in-memory JavaScript array and JSON only—no database or Mongoose.

## Requirements
- Node.js and npm
- Postman (for testing)

## Run the project
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open the VS Code terminal in this folder.
4. Run `npm install`.
5. Run `npm start`.
6. The server runs at `http://localhost:3000`.

## Endpoints

| Method | URL | Purpose |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/1` | Get one student by ID |
| POST | `/students` | Add a student |
| PUT | `/students/1` | Update a student |
| DELETE | `/students/1` | Delete a student |

## Example request body for POST and PUT
Set Postman body to **Body → raw → JSON**:

```json
{
  "name": "Aman Kumar",
  "age": 21,
  "course": "CSE"
}
```

## Expected status codes
- `200` Success
- `201` Created
- `400` Bad Request
- `404` Not Found

## Push to GitHub
1. Create a new empty repository on GitHub, for example `Student-Management-REST-API`.
2. Open a terminal in this project folder.
3. Run:

```bash
git init
git add .
git commit -m "Complete Student Management REST API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Student-Management-REST-API.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Then submit the repository URL in your `.txt` file.
