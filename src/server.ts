import dotenv from "dotenv";
import Connection from "./db/db.js";
import app from "./app.js";
import dns from "dns"

dns.setServers(["1.1.1.1", "8.8.8.8"])
dotenv.config(
    {
        path: "./.env"
    }
)

if(!process.env.MONGODB_URI){
   throw new Error("MONGODB_URL is not defined");
   
}

 await Connection()
app.listen(process.env.PORT,() => {
    console.log(`Sever running on PORT ${process.env.PORT}`)
})

