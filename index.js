import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

dotenv.config({
    path: ".env"
})
databaseConnection();
const app = express();

// middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());
// const corsOptions = {
//     origin: [
//         // "https://twitter-clone-3-txso.onrender.com",
//         "https://comforting-pony-58050e.netlify.app"
//         // "http://localhost:3000"
//         // "http://localhost:3000", 
//     ],
//     credentials: true
// }
app.use(cors({
    origin: 'https://comforting-pony-58050e.netlify.app',
    credentials: true
}));

// app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
// api
app.use("api/v1/user", userRoute);
app.use("api/v1/tweet", tweetRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})