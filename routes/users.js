const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const verifyToken = require('./verifyToken')

// Afficher tous les utilisateurs
router.get('/', verifyToken, async (req, res) => {

  const usersList = await User.find()

  try {
    res.status(201).json({ usersList })
  } catch (err) {
    res.status(400).json({message : err })
  }
})

// Afficher un utilisateur
router.get('/:id', verifyToken, async (req, res) => {

  const user = await User.findOne({ _id : req.params.id })

  try {
    res.status(201).json({user})
  } catch (err)
  {
    res.status(400).json({message : err })
  }
})

// Editer un utilisateur
router.put('/:id', async (req, res) => {

  // Hasher le mot de passe
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(req.body.password, salt)

  try {

    await User.updateOne(
      {_id: req.params.id },
      {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hash,
      }
    );
    res.status(201).send("Mise à jour avec succès");
  } catch (err) {
    res.status(400).json({message : err })
  }
})

// Supprimer un utilisateur
router.delete('/:id', async (req, res) => {

  try {
    await User.deleteOne({ _id: req.params.id })
    res.status(201).send("Utilisateur supprimé avec succès");
  } catch (err) {
    res.status(400).json({message : err })
  }
  
})

module.exports = router;
