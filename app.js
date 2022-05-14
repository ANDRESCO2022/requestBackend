const express = require('express');
 const cors = require('cors');
 const rateLimit = require('express-rate-limit');

 const {globalErrorHandler} =require('./controllers/errorControllers')

const { userRouter } = require('./routes/userRoutes');
const { repairsRouter } = require('./routes/repairRoutes');

const { db } = require('./utils/data');

const app = express();
 
app.use(cors())
app.use(express.json());
const limiter = rateLimit({
  max: 1000,
  windowMs: 1 * 60 * 60 * 1000,
  message: 'Too many requests from this IP',
});

app.use(limiter);
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*',globalErrorHandler)
module.exports={app}