const express = require('express');
const dotenv = require('dotenv');
// const res = require('express/lib/response');

const hospitals = require('./routes/hospitals');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use('/api/v1/hospitals', hospitals)

const PORT = process.env.PORT;
app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, 'mode on port', PORT));