import express from "express";
const app = express();
export default app;

import employeesRouter from `#api/employees`;

app.get("/",(req,res)=>{
    res.send("Welcome to the Fullstack Employees API")
});


app.use("/employees",employeesRouter);


app.use((err, req, res, next) => {
  res.status(500).send("Sorry, something went wrong :(");
});