const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
const todos = [{
    "id": 0,
    "todo": "Complete My Node App"
},
{
    "id": 1,
    "todo": "Learn Next.js"
},
{
    "id": 2,
    "todo": "Learn Redux"
},
{
    "id": 3,
    "todo": "Keep Learning"
}
]

app.prepare()
.then(() => {
  const server = express()
    
  server.get('/api/express/todolist', (req, res) => {
    let result = JSON.stringify(todos)
    return res.end(result)
  })
  server.get('*', (req,res)=>{
      return handle(req, res)
  })
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

