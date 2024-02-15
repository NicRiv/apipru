import { config as dotenv } from "dotenv"
dotenv()

import app from './app'
import './database'

const PORT = process.env.PORT 
app.listen(PORT)
console.log(`running on port: ${PORT}`)