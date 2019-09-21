const path = require('path')
const express = require('express')


const app = express()
// const publicDirPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirPath))

app.get('/hello', (req, res) => {
    res.send('Hello express!')
})

app.listen(3000, () => console.log('Server running.'))