// 1.importing express
const express=require("express")

// 2.inserting
const app=new express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 3.api creation
app.get("/",(req,res)=>{
    res.json("hello world")

})
app.post('/signup',(req,res)=>{
    
    res.send(req.body.name);
})


app.listen(3005,()=>{
    console.log("port 3005 is running")

})