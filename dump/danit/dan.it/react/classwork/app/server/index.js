const express = require('express')

const app = express();

const emails = [
  { id: 1, topic: 'Email 1', favorite: true, body: 'Email 1 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' },
  { id: 2, topic: 'Email 2', body: 'Email 2 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' },
  { id: 3, topic: 'Email 3', body: 'Email 3 - Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.' }
]

app.use(express.static(__dirname + '/public'))

app.get('/api/emails', (req, res) => {
  res.send(emails);
})

app.get('/api/emails/:emailId', (req, res) => {
  const { emailId } = req.params
  res.send(emails.find(e => e.id === +emailId));
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

const port = process.env.PORT || 8085;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})