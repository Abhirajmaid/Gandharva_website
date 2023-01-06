const SponsorModel = require("../models/sponsor.model");

const sponsorUsController = async (req, res) => {
  if (!req.body) return res.status(400).json({ error: "invalid data" });

  const data = await SponsorModel.findOne({
    companyEmail: req.body.companyEmail,
  });

  if (data) return res.status(406).json({ error: "email already present" });


  try {
    const newSponsor = new SponsorModel({
      companyName: req.body.companyName,
      companyEmail: req.body.companyEmail,
      contactNo: req.body.contactNo,
      whyToSponsor: req.body.whyToSponsor,
    });

    await newSponsor.save();
    res.status(201).json({ message: "new sponsor created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = sponsorUsController
