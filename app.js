const express=require("express")
const app=express()
const path=require("path")
const ejsmate=require("ejs-mate")

app.engine("ejs",ejsmate)
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/class10",(req,res)=>{
    res.render("class10.ejs");
})

app.listen(3000,(req,res)=>{
    console.log("app listening at port 3000")
})