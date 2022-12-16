// Зависимости
const path = require('node:path')
const express = require('express')

// Конфигурация сервера
const server = express()
// server.use(express.json({ extended: true }))
server.use('/', express.static(path.resolve(__dirname, '../client')))

// Конфигурация API
server.use('/api', require('./apiRouter'))

server.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/index.html'))
})



// Запуск сервера
server.listen(80, () => console.log('ok!'))