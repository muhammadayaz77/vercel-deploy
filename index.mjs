import express from 'express'
let app = express();
let PORT = 3000;
app.get('/api/users',(req,res) => {
  res.status(200).json({message : 'Data goes here'})
})

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`)
})