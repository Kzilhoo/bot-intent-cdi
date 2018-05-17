const getEnv = () => {
    return {
        exchange: process.env.RABBIT_EXCHANGE,
        queue: process.env.RABBIT_INTENT_CDI_QUEUE,
        binding: process.env.RABBIT_INTENT_CDI_BINDING,
        apiKey: process.env.RABBIT_INTENT_API_BINDING
    }
}

export const assertQueue = (connexion, callback) => {

    const env = getEnv()
    connexion.then(conn => {
        conn.createChannel(function (err, ch) {
            ch.assertExchange(env.exchange, 'topic', { durable: true })
            ch.assertQueue(env.queue, { durable: true }, function (err, q) {


                ch.bindQueue(q.queue, env.exchange, env.binding)
                console.log(' [*] Waiting for logs. To exit press CTRL+C', q.queue, env.exchange, env.binding)
                ch.consume(q.queue, function (msg) {
                    console.log(' [*] Response. To exit press CTRL+C')
                    callback(JSON.parse(msg.content.toString()))
                }, { noAck: true })
            })
        })
    })
}

export const sendTo = (connexion, message) => {

    const env = getEnv()
    connexion.then(conn => {
        conn.createChannel(function (err, ch) {
            ch.assertExchange(env.exchange, 'topic', { durable: true })
            ch.publish(env.exchange, env.apiKey, new Buffer(message))
            console.log(' [x] Sent %s:\'%s\'', env.apiKey, message)
        })
    })
}