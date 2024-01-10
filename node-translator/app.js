// // app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const { tx } = require('@transifex/native');

// const app = express();
// const port = 3001;

// // Initialize Transifex with your token
// tx.init({
//   token: '1/54d6e8bd2e8f950a67cf6f199a0f98265fd241a5',
// });

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // Translation endpoint
// app.post('/translate', (req, res) => {
//   const { message, language } = req.body;

//   // Perform translation using Transifex
//   const translatedMessage = translateMessage(message, language);

//   res.json({ translatedMessage });
// });

// // Translation function
// async function translateMessage(message, language) {
//     try {
//       console.log('Translating:', message, 'to language:', language);
  
//       // Explicitly request translation from Transifex
//       const translatedMessage = await tx.translate(message, { to: language });
  
//       console.log('Translated message:', translatedMessage);
  
//       return translatedMessage;
//     } catch (error) {
//       console.error('Error translating message:', error.message);
//       return message; // Return the original message in case of an error
//     }
//   }
  

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const { tx } = require('@transifex/native');

// const app = express();
const port = 3001;

// // Initialize Transifex with your token (replace with your actual token)
// tx.init({
//   token: '1/54d6e8bd2e8f950a67cf6f199a0f98265fd241a5',
// });

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // Translation endpoint
// app.post('/translate', async (req, res) => {
//   try {
//     const { message, language } = req.body;

//     // Specify resource slug and source language
//     const translatedMessage = await tx.translate(
//       'your_resource_slug', // Replace with your resource slug
//       'en', // Assuming English as the source language
//       language, // Target language from request
//       message
//     );

//     res.json({ translatedMessage });
//   } catch (error) {
//     console.error('Error translating message:', error.message);
//     res.status(500).json({ error: 'Translation failed' }); // Send error response
//   }
// });

// // Translation function (not needed anymore as translation is done directly in the endpoint)
// // async function translateMessage(message, language) { ... }



const { TxExpress, SessionMode } = require('@transifex/express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const session = require('express-session');
// or
// const cookieSession = require('cookie-session');

app.use(session({ secret: "1/1e68163c4ed010eae256d773ca28c7bb7c1f1859" }));
// or
// app.use(cookieSession({ keys: ['1/1e68163c4ed010eae256d773ca28c7bb7c1f1859'] }));



const txExpress = new TxExpress({
  token: '1/7fe90957c49bc42c045720747f733fd0dca505b2',
  mode: SessionMode({ name: 'my-tx-cookie' }),
});

app.use(txExpress.middleware());
app.post('/i18n', txExpress.setLocale());
app.get('/', (req, res) => { res.send(req.t('hello worl')); });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});