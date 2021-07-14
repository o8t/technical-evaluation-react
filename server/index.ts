import path from 'path';
import express from 'express';
import routes from './routes';
import env from './environment';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(env.PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${env.PORT}`);
});
