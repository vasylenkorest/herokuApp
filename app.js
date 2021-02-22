const express = require('express');
const app = express();
const url = require("url");
const port = process.env.PORT || 3000;

const KEY = '303'

const cred = {
    accountSid: "1235871285127567125",
    authToken: "12353255Jafgu735wegu25"
};

app.get('/cred', (req, res) => {
    if(req.method == 'GET'){
        let reqUrl = url.parse(req.url, true);

        if(reqUrl.query.key == KEY){
            res.send(cred);
        } else {
            res.send('Bad request!')
        }
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
