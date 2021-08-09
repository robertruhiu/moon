const express = require('express');
const path = require('path');

const history = require('connect-history-api-fallback');
let expressStaticGzip = require("express-static-gzip");

let app = express();

// app.use(serveStatic(__dirname + "/dist"));
app.use(history())


app.use("/", expressStaticGzip("dist", {
    enableBrotli: true,
    orderPreference: ['br','gz']
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
});
