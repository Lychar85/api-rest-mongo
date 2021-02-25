const router = require('express').Router()
const User = require('../models/User')

// Ajouter un utilisateur
router.post('/register', async (req, res) => {

  // Si l'email existe
  const emailExiste = await User.findOne({email: req.body.email})
  if(emailExiste) return res.status(400).send('L\'email existe déjà')

  const user = new User({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    password : req.body.password,
  })

  try {
    const newUser = await user.save();
    res.status(201).json({newUser})
  } catch (err) {
    res.status(400).json({ message: err })
  }
} )

module.exports = router;

