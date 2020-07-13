const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 8877;
//Usando para fazer isso  no heroku
app.listen(PORT, () => {
    console.log('Escutando na porta: '+ PORT);
})