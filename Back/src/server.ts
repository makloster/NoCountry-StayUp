import app from "./app"




const startServer = async () => {


  // AWAIT CONNECT DATABASE HERE

  const PORT = 4000;
  
  app.listen(4000, () => {
  console.log("SERVER ON PORT :" +PORT)
})
}

startServer();
