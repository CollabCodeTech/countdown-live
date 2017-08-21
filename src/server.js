const app = require('./config/express')
const port = 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To down the server: ctrl + c')
})