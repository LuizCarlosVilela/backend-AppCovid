const express = require('express');

const app = express();

const PORT = process.env.PORT || 8877;

app.get('/equips', (req, resp) => {
    resp.json({
        eje: "sla",
        ssksk: "Deus é mais"
    })
})

app.get('/about', (req, res) => {
   res.json({
       name: "Luiz",
       email: "Luizinho@gmail.com",
       phone: "Qualquer coisa",
       github: "sla man"
   });
});

app.get('/', (req, res) => {
    res.json({
        msg: "ok"
    })
});

app.listen(PORT, () => {
    console.log('Escutando na porta: '+ PORT);
})