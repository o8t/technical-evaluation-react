import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import env from './environment';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(routes);

app.listen(env.PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${env.PORT}`);
});
