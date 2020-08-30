const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const dev = process.env.NODE_ENV === 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use('/api/check', require('./router/check'))

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')

        })
    }).catch(err => {
        console.log(err)
    })


})
    .catch((ex) => {
        console.log(ex.stack)
        process.exit(1)
    })