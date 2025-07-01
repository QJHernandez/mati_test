import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript API' });
});

app.post('/api/data', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});