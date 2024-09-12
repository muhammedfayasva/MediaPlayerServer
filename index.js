//import json server
const jsonServer = require('json-server')
//create server for MP
const MPserver = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set route for json file
const route = jsonServer.router('db.json')
//to available app in port
const PORT = 3000 || process.env.PORT

MPserver.use(middleware)
MPserver.use(route)
MPserver.listen(PORT,()=>{
    console.log(`Media Player Server Started at Port ${PORT} and Waiting for Client Request`);
    
})