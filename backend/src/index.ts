import cors from 'cors'
import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

   const app = express()

    app.use(cors({
      credentials: true,
      origin: ['http://localhost:5173']
    }))

   app.get('/api/products', (req: Request, res: Response) => {
    console.log(sampleProducts)
     res.json(sampleProducts)

   })
   const PORT = 4000
   app.listen(PORT, () => {
     console.log(`server started at http://localhost:${PORT}`)
   })
   // npm i cors
   // npm i --save-dev @types/cors
   // npm i --save-dev nodemon