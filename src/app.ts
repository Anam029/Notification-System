import express from "express" ;
import session  from "express-session"
import passport from "passport";
import  "./config/passport.js"
import cookieParser from "cookie-parser";


const app = express();


app.use(express.json());
app.use(cookieParser())
app.use(
    session({
        secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
   cookie:{
    httpOnly: true, 
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24, 
   }
    })
   
   
)
app.use(passport.initialize());
app.use(passport.session());


export default app;