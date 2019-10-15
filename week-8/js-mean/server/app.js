const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist/js-mean')))
app.use('/', express.static(path.join(__dirname, '../dist/js-mean')))

const composers = [
  { id: 1, firstName: "Johann", lastName: "Bach" },
  { id: 2, firstName: "Wolfgang", lastName: "Mozart" },
  { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
  { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
  { id: 5, firstName: "Frederic", lastName: "Chopin" },
];

function getComposers() {
  return composers
}

function getComposerById(composerId) {
  return composers.find(c => c.id == composerId)
}

app.get('/api/composers', function(req, res) {
  res.json(getComposers())
})

app.get('/api/composer/:id', function(req, res) {
  res.json(getComposerById(req.params.id))
})

http.createServer(app).listen(3000, function() {
  console.log('Listening on port 3000')
})
