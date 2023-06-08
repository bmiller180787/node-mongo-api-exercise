const express = require('express');
const router = require('./config/routes');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json())
app.use(cors())

// Add all the routes to app
router(app);

app.listen(port, () => {
    console.log(`m8node-mongodb app running. Listening on ${port}`);
});