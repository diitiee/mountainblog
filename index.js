require ('dotenv').config()
const express = require ('express')
const cors = require ('cors')
require ('./connection/db')
const router = require('./Router/router')

const BlogSiteServer = express()
BlogSiteServer.use(cors())
BlogSiteServer.use(express.json())

const PORT = 3000 || process.env.PORT

BlogSiteServer.use('/', router);

BlogSiteServer.listen(PORT,() =>{
    console.log(`BlogSiteServer Running at PORT:${PORT}... waiting for client request`);
    
})
BlogSiteServer.get('/',(req,res)=>{
    res.send('<h1>BlogSite Server Started</h1>')
})