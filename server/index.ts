import path from 'path';
import express from 'express';
// import HttpStatus from 'http-status-codes';

const PORT = 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res) => res.send('Gotham Server'));
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
