import express, {json} from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index";


//Init express
const app = express();


//Api config
app.use(json())
app.use(cors());
app.use(express.urlencoded({extended: true}));



//Routes
app.use("/api/v1", router);





export default app;