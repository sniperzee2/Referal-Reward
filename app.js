const express = require('express')
const morgan = require('morgan')
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const user = require('./routes/userRoute');
const refer = require('./routes/referalRoute');

const app = express()
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));


app.use("/",user)
app.use("/",refer)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });