import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // urlencoded  for the url fetched data to understand the encoded url
// extended = object ke andar object nested object

app.use(express.static("public")) // public assest who ever can access img , favicon
app.use(cookieParser())





// routes
 import userRouter from "./routes/user.routes.js"

// routes declaration 

app.use('/api/v1/users',userRouter)

// https::localhost3000/api/v1/users/login





// export default app
export { app }