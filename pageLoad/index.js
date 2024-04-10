/** 后台服务 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('/static/style.css', (req, res) => {
  const sleep = req.query.sleep || 0;
  setTimeout(() => {
    const text = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');
    res.setHeader('Content-Type', 'text/css');
    res.send(text);
  }, sleep);
});

app.listen('8000', () => {
  console.log('server is running at port 8000');
});
