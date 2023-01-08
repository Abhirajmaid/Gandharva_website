const mongoose = require('mongoose');
const express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');
const { uploadFile, generateUrl } = require("../utils/drive.goggle");
const { bufferToStream } = require("../utils/helper");
const RegistrationUser = require("../models/registration");
const Admin = require("../models/admin");
const  SponsersRegister = require("../models/sponsers");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ 
    storage, 
    limits: {
        fileSize: 5*1024*1024
    }
});



router.post("/Registration",upload.single("transss"),async (req,res)=>{
    console.log("hellothere");
    const { name, email, phone, clgname, event, transid } =
    req.body;
    console.log(req.body.name, req.body.transss);
  if (
    !name ||
    !email ||
    !phone ||
    !clgname ||
    !event ||
    !transid ||
    !req.file
  ) {
    return res.status(422).json({ error: "plz fill the data properly" });
  }

  // const file = await bufferToStream(req.file.buffer);
  const file = bufferToStream(req.file.buffer)
  const filename = `${name}-transactionSS-${Date.now()}`;
  
  const fileId = await uploadFile(file, filename);
  const imgUrl = await generateUrl(fileId);
  // const imgUrl = await uploadFile(file, filename)
  try {
    const newRegistration = new RegistrationUser({
      name,
      email,
      phone,
      clgname,
      event,
      transid,
      transss: imgUrl,
    });
    const result = await newRegistration.save();
    console.log(result);
    res.status(201).json({ message: "registration succesfful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
    // try{
    //     console.log(req.body);
    //     const registeremply = new RegistrationUser({
    //         name: req.body.name,
    //         email: req.body.email,
    //         phone: req.body.phone,
    //         clgname: req.body.clgname,
    //         event: req.body.event,
    //         transid : req.body.transid,
    //         transss: {
    //             data: fs.readFileSync("uploads/" + req.file.filename),
    //             contentType: "image/png",
    //         },
    //     })
    //     const result = await registeremply.save();
    //     console.log(result);
    //     res.status(201).send("done");
    // }catch(err){
    //     res.status(400).send(err);
    //     console.log(err);
    // }

});
router.post("/sponsers",async (req,res)=>{
    try{
       
        const sponsersregister = new SponsersRegister({
            comname: req.body.comname,
            comemail: req.body.comemail,
            comphone: req.body.comphone,
            message: req.body.message
        })
        const result= await sponsersregister.save();
        console.log(result);
        res.status(200);
        
    } catch(err){
        console.log(err);
    }
});
router.post('/adminlogin',async (req,res)=>{
  try{
    const { email, password} = req.body;
    const admin = await Admin.findOne({email: email});
    if(admin.password === password){
         if (res.status(201)) {
            return res.json({status: "ok"});
        
      }
       
    }
   
    else{
        return res.json("Adin not exit");
    }
  } catch(err){
    console.log(err);
  }
});
router.get("/adminpage", (req, res) => {
  var date =new Date() ;
  console.log(date);
    RegistrationUser.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
       
        res.status(200).send(data);
      }
    });
  });
  
module.exports = router;