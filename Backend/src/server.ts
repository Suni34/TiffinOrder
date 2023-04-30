import express, { application } from "express";
import cors from "cors";
import { sample } from "./menu";
import { vendor_l } from "./logindata";
import jwt from "jsonwebtoken"


const app = express();
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["https://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(sample)
})
app.get("/api/foods/search/:searchItem", (req, res) => {
    const searchItem = req.params.searchItem;
    const foods = sample.filter(Breakfast => Breakfast.name.toLowerCase().includes(searchItem.toLowerCase()));
    res.send(foods)
})
app.get("/api/foods/:breakfastId",(req, res)=>{
    const breakfastId = req.params.breakfastId;
    const food = sample.find(breakfast =>breakfast.id == breakfastId);
    res.send(food)

})

const port = 5000;
app.listen(port, () => {
    console.log("Website is running on https://localhost:" + port)

})

//loginapi
app.post("/api/users/login",(req,res)=>{
    const {name, password} = req.body;
    const user = vendor_l.find(user => user.name === name && user.password === password);
    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("User name or password is not valid")
    }
})
const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        name:user.name
    },"Suneetha",{
    expiresIn:"30d"
    });
    user.token = token;
    return user;
    
}