// Readable - чтение
// Writable - запись
// Duplex - для чтения и записи Readable + Writable
// Transform - как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')


// fs.readFile(path.resolve(__dirname, '../fs/text.txt'), (err, data) => {
//     if (err) throw err
//     console.log(data)
// })


// Тоже самое с помощью стрима ⬇

const stream = fs.createReadStream(path.resolve(__dirname, '../fs/text.txt'))
stream.on('data', (chunk) => {
    console.log(chunk)
})