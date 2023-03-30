const os = require('os');

const cluster = require('node:cluster')
const cpus = os.cpus()

if (cluster.isMaster) {
    for (let i = 0; i < cpus.length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', {})
} else {
    console.log(`Worker with pid=${process.pid}`);
    setInterval(() => {
        console.log(`Worker with pid=${process.pid} working`);
    }, 5000)
}



// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus()) // return Array where each element is a description of a processor core
// console.log(os.cpus().length)


