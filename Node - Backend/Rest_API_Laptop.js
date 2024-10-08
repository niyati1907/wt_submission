const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const Laptop=require('./model/Laptop');
const bodyParser=require('body-parser');
const cors=require('cors');
// var jsonParser = bodyParser.json()
mongoose.connect('mongodb+srv://23031701020:admin@cluster0.fowzn.mongodb.net/Laptops').then(()=>{
    const app=express();

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', (req,res)=>{
        res.send("Home Page");
    })
    app.get('/Laptop',async(req,res)=>{
        // res.send("hello");
        const data=await Laptop.find();
        res.send(data);
    })

    app.get('/Laptop/:id',async(req,res)=>{
        const data=await Laptop.findOne({id:req.params.id})
        res.send(data);
    })

    app.post('/Laptop',async(req,res)=>{
        // const data=await Laptop.findOne({id:req.params.id})
        const Lap=new Laptop();
        Lap.lapTopName=req.body.lapTopName,
        Lap.LaptopImage=req.body.LaptopImage,
        Lap.LaptopRAM=req.body.LaptopRAM,
        Lap.LaptopHD=req.body.LaptopHD,
        Lap.LaptopProcessor=req.body.LaptopProcessor,
        Lap.LaptopGraphicsCard=req.body.LaptopGraphicsCard,
        Lap.LapTopPrice=req.body.LapTopPrice,
        Lap.id=req.body.id

        const data=await Lap.save();
        res.send(data);
    })

    app.put('/Laptop/:id',async (req,res)=>{
        const data=await Laptop.findOne({id:req.params.id})
        data.lapTopName=req.body.lapTopName,
        data.LaptopImage=req.body.LaptopImage,
        data.LaptopRAM=req.body.LaptopRAM,
        data.LaptopHD=req.body.LaptopHD,
        data.LaptopProcessor=req.body.LaptopProcessor,
        data.LaptopGraphicsCard=req.body.LaptopGraphicsCard,
        data.LapTopPrice=req.body.LapTopPrice,
        await data.save();
        res.send(data);
    })

    app.delete('/Laptop/:id',async(req,res)=>{
        const data =await Laptop.deleteOne({id:req.params.id});
        res.send(data);

    })
    app.listen(8888,()=>{
        console.log('server listening on 8888');
    })
})




