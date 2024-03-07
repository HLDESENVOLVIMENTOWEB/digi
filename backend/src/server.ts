import express from 'express';
import bodyParser from 'body-parser';
import cartRoutes from './routes/cartRoutes';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', cartRoutes);
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
