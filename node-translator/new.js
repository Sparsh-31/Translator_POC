const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

const { TxExpress } = require('@transifex/express');

// const txExpress = new TxExpress({ token: '1/7fe90957c49bc42c045720747f733fd0dca505b2' });
// app.use(txExpress.middleware());
// app.post('/i18n', txExpress.setLocale());

// Initialize Transifex with your token
tx.init({ token: '1/7fe90957c49bc42c045720747f733fd0dca505b2' });

const txExpress = new TxExpress({
    // TxExpress options
    daemon: true,
    ttl: 2 * 60,
  
    // tx options
    token: '1/7fe90957c49bc42c045720747f733fd0dca505b2',
    filterTags: 'mytags',
  });
  


  txExpress.fetch().then(() => {
    app.listen(3000, () => {
      console.log('App listening on port 3000');
    });
  });