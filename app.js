const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  if(req.method == 'GET'){
        let urlReq = url.parse(req.url, true);
        console.log('urlReq : ', urlReq.query.key);
        if(urlReq.query.key == '303'){
            res.send('Yes!')
        } else {
            res.send('No!')
        }
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
