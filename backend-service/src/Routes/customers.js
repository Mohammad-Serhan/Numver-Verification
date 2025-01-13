const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

const { validatePhoneNumber } = require("./validatePhone");




router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.post("/", async (req, res) => {
  const checkValid = await validatePhoneNumber(req.body.phone);

  if (checkValid.valid == true) {
    const customer = new Customer({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    });

    try {
       await customer.save();
      res.json(checkValid);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  } else 
    res.json(checkValid);
});




router.get("/:id", getCustomer, (req, res) => {
  res.json(res.customer);
});




router.patch("/:id", getCustomer, async (req, res) => {
  const checkValid = await validatePhoneNumber(req.body.phone);

  if (checkValid.valid == true) {
    if (req.body.name != null) {
      res.customer.name = req.body.name;
    }
    if (req.body.address != null) {
      res.customer.address = req.body.address;
    }

    try {
      await res.customer.save();
      res.json(checkValid);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else res.json(checkValid);
});



router.delete("/:id", getCustomer, async (req, res) => {
  try {
    await res.customer.remove();
    res.json({ message: "Deleted Customer" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



async function getCustomer(req, res, next) {
  let customer;
  try {
    customer = await Customer.findById(req.params.id);
    if (customer == null) {
      res.status(404).json({ message: "Cannot find customer" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.customer = customer;
  next();
}

module.exports = router;
