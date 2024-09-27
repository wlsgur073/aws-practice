const express = require('express')
const app = express()
const port = 80;
require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('DB 연결 성공!');
  } catch (err) {
    console.log('DB 연결 X', err);
  }
  console.log(`Example app listening on port ${port}`)
})
