const app = require('./app');

const port = 8008;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});