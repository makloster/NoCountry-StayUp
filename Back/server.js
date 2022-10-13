
const { app } = require("./app");
const { connectDB } = require("./config/database");
const { Models } = require("./models");
const { relationship } = require('./models/relationship')







const PORT = 4000;

const startServer = async () => {

  relationship()
  
  await connectDB();

  app.listen(4000, () => {

    console.log("express running on PORT:" + PORT);
  });
};


startServer();



