require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/db');
const imageRoutes = require('./routes/image-routes');


connectDB();
app.use(express.json());

app.use('/api/images', imageRoutes);



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}!`));