import express from 'express'
import cors from 'cors'
import morgan from 'morgan'


const app = express()
import router  from './src/router/rutas.js'


app.use(express.json())
app.use(cors ())
app.use(morgan())
app.use('/api/tasks', router)




app.listen(4000,(console.log("servidor andando")))