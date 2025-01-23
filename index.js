const express=require("express")
const cors= require("cors")
const bodyParser=require("body-parser")
const sequelize=require('./database/db')
const testRoutes = require('./routes/testRoute')

//creating a server
const app=express();

//creating a port
const PORT=process.env.PORT||5000;

//creating a middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res)=>{
    res.send("This is webpage")
})
app.get('/ourpartners',(req, res)=>{
    res.send("Your partners")
})

app.listen(PORT,()=>{
    console.log(`Server running on port........${PORT}`);
})


app.use('/test',testRoutes)
