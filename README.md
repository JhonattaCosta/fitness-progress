Here's the translation of your text:

# Fit-Progress

**Fit-Progress** is a platform to log and track your daily workouts and weight progression. The goal is to help users monitor their progress in exercises over time. The platform will eventually be transformed into an app.

## Features

- Log daily workouts with custom exercises.
- Track the weight used in each exercise.
- Weight progression history to monitor performance.
- Simple and intuitive interface for easy navigation.

## Technologies Used

- **Node.js**: Server-side platform to build the application.
- **Express**: Framework for route handling and HTTP requests.
- **PostgreSQL**: Relational database to store workouts and progress.

## Installation and Execution

### Prerequisites

- Node.js installed ([Download here](https://nodejs.org/))
- PostgreSQL installed and configured ([Download here](https://www.postgresql.org/download/))

### Steps to run the project locally

1. **Clone the repository:**

```bash
   git clone https://github.com/your-username/fit-progress.git
```

2. **Install the dependencies:**

```bash
  cd fit-progress
  npm install
```

3. **Set up environment variables: Create a _.env_ file in the root of the project and define the following variables:**

```bash
  DB_HOST=localhost
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=fit_progress
  DB_PORT=your_port
```

4. **Start the server:**

```bash
  npm run dev
```

5. **Access in the browser:**

   http://localhost:3000

## Project Structure

```bash
 fit-progress/
│
├── src/                   # Source code
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # Route definitions
│   └── views/              # View templates
│
├── .env                    # Environment variables
├── package.json            # Dependency manager
└── README.md               # Project documentation

```

## Future Features

- Integration with mobile devices (app).
- Charts to visualize weight progression over time.
- Body metrics tracking (weight, BMI, etc.).

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT license. See the LICENSE file for more information.
