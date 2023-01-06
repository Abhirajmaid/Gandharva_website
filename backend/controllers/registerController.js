const EventRegModel = require("../models/register.model");

const { uploadFile, generateUrl } = require("../utils/drive.google");
const { bufferToStream } = require("../utils/helper");

const registerController = async (req, res) => {
  const { name, email, contactNo, college, eventName, transactionId } =
    req.body;
  if (
    !name ||
    !email ||
    !contactNo ||
    !college ||
    !eventName ||
    !transactionId ||
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
    const newRegistration = new EventRegModel({
      name,
      email,
      contactNo,
      college,
      eventName,
      transactionId,
      transactionSS: imgUrl,
    });
    await newRegistration.save();
    res.status(201).json({ message: "registration succesfful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = registerController;
