import express from 'express';
import data from '../data'
const router = express.Router();

router.get('/', async (req, res) => {

  if(data) {
    // console.log(data.products);
    res.send(data.products);
  }
  else{
    res.status(404).send({ message: 'Product Not Found.' })
  }

});

router.get('/:id', async (req, res) => {
  const product = await data.products.find(obj=>obj._id===req.params.id);
  if (product) {
    console.log(product);
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

export default router;
