const Emitter = require('events')


const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log('Вы прислали сообщение', + data)
    console.log('Второй аргумент', + second)
    console.log('Третий аргумент', + third)
})


const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123, 321)
} else {
    emitter.emit('message', MESSAGE, 'Вы не указали сообщение')
}
