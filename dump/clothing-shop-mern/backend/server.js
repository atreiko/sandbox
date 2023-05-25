const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handling Uncaught Exception (обработка неперехваченного исключения)
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1)
})

// Config
dotenv.config({ path: 'backend/config/config.env'});

// Connecting to database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

// console.log(MISTAKEforUncaughtException);
// Error: MISTAKEforUncaughtException is not defined
// Shutting down the server due to Uncaught Exception

// Unhandled Promise Rejection (необработанный отказ от промиса)
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1)
    })
})






//? exit(1) - выход с ошибкой. exit(0) - ok выход.
//! https://nodejs.org/api/process.html#process_process_exit_code

//* Unhandled Promise Rejection - событие происходит, когда Promise завершен с ошибкой
//*                                 ошибка в названии конфига DB_URI
//* Uncaught Exception - как ошибка с инициализацией переменной