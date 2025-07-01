import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript API' });
});

app.post('/coupons', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.post('/coupons/code', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.post('/coupons/assign', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.post('/coupons/assign/{code}', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.post('/coupons/lock/{code}', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.post('/coupons/redeem/{code}', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});