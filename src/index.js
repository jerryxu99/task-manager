const app = require('./app');

const port = process.env.PORT;

// index.js seperated from app.js for jest
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
