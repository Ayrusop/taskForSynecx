#  Supermarket Dashboard

A full-stack dashboard application for monitoring supermarket sales, inventory, customer insights, and trends.

---

##  Getting Started

Follow these steps to run the project locally:

---

###  1. Clone the Repository

```bash
git clone https://github.com/Ayrusop/taskForSynecx.git
cd taskForSynecx

cd backend

Edit the config/config.json file and add your local PostgreSQL credentials for development, test, and production like so:

{
  "development": {
    "username": "your_db_user",
    "password": "your_db_password",
    "database": "supermarket_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "your_db_user",
    "password": "your_db_password",
    "database": "supermarket_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "your_db_user",
    "password": "your_db_password",
    "database": "supermarket_prod",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

Make sure PostgreSQL is running. Then run:

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

start Backend Server

npm install
npm start


3. Set Up the Frontend
Open a new terminal and run:

cd frontend
npm install
npm start