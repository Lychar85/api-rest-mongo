const Category = require('../models/Category')
const router = require('express').Router()


// Ajouter une catégorie
router.post('/add', async (req, res) => {
  
  const category = new Category ({
    title : req.body.title
  })
  try {
    const newCategory = await category.save()
    res.status(201).json({ newCategory })
  } catch (err) {
    res.status(400).json({message : err})
  }

})

// Afficher toutes les catégories
router.get('/', async (req, res) => {
  const categories = await Category.find()

  try {
    res.status(201).json({ categories })
  } catch (err) {
    res.status(400).json({message : err})
  }
})

// Afficher une categorie
router.get('/:id', async (req, res) => {

  const category = await Category.findOne({ _id : req.params.id })

  try {
    res.status(201).json({category})
  } catch (err)
  {
    res.status(400).json({message : err })
  }
})

// Mets à jour une catégorie
router.put('/:id', async (req, res) => {
  try {
    await Category.updateOne(
      {_id : req.params.id},
      {title: req.body.title}
    )
    res.status(201).send('Mise à jour de la catégorie avec succès !')
  } catch (err)
  {
    res.status(400).json({message : err })
  }
})

// Supprimer une catégorie
router.delete('/:id', async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id })
    res.status(201).send("Catégorie supprimé avec succès !");
  } catch (err) {
    res.status(400).json({message : err })
  }
  
})

module.exports = router;