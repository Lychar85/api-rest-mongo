const Article = require('../models/Article')
const router = require('express').Router()

// Ajouter un article
router.post('/add', async (req, res) => {

  let query = "INSERT INTO `products` (title, content, price) VALUES ('" + req.body.title +"','" + req.body.content + "','" + req.body.price + "')";
  console.log("query :", query);
  
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ product: result });
  });

/*
  try {
    const newArticle = await article.save();
    res.status(201).json({ newArticle });
  } catch (err) {
    res.status(400).json({ message: err });
  }
  */
  
})

// Afficher tous les produits
router.get('/', async (req, res) => {

  let query = "SELECT * FROM products"

  db.query(query, (err, result) => {
    console.log("result :", result);
    
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ products: result });
  });


} )


// Afficher les articles par catégory
router.get('/bycategories/:id', async (req, res) => {
  const articles = await Article.find({ category: req.params.id }).populate('category', 'title')

  try {
    res.status(201).json({articles})
  }  catch (err) {
    res.status(400).json({ message: err });
  }

})

// Mettre à jour un article
router.put('/:id', async (req, res) => {

  try {
    await Article.updateOne(
      {_id: req.params.id},
      {title: req.body.title,
      content: req.body.content,
      cover: req.body.cover,
      category: req.body.category}
    )
    res.status(201).send('Article mis à jour avec succès !')
  } catch (err) {
    res.status(400).json({ message: err });
  }
})

// Supprimer un article
router.delete('/:id', async (req, res) => {
  try {
    await Article.deleteOne({_id : req.params.id})
    res.status(201).send('Article supprimé avec succès !')
  } catch (err) {
    res.status(400).json({ message: err });
  }
})

module.exports = router;