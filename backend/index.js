const express=require('express')
const User =require('./DB/Users')
const app= express();
const cors=require('cors')
require('./DB/config')
app.use(express.json());
app.use(cors());

app.post('/create',async(req,resp)=>
{
  let data= new User(req.body)
  let result= await data.save();
  console.log(req.body)
  resp.send(result)
})


app.listen(5000);