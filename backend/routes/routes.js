const multer = require('multer')
const express = require("express");
const router = express.Router();

const registerController = require('../controllers/registerController')
const sponsortUsController = require('../controllers/sponsorUsController')

// storage
const storage = multer.memoryStorage();
const upload = multer({ 
    storage, 
    limits: {
        fileSize: 5*1024*1024
    }
});

// register for event
router.post("/register", upload.single("transactionSS"), registerController);

// sponsor-us
router.post("/sponsor_us", sponsortUsController);

// get-sponsors
router.get("/getSponsors", async (req, res) => {
  let data = await SponsorModel.find();
  res.status(200).json(data);
});

// get-registrations
router.get("/getStudents", async (req, res) => {
    let data = await StudentModel.find()
    res.status(200).json(data)
})

module.exports = router;
