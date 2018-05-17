import { cdi } from './cdi'
import { search } from './infos'

export const logic = ($message) => {
    const offer = "bot-offer"
    return new Promise((resolve, reject) => {
        const response = cdi[Math.floor(Math.random() * cdi.length)];
        const intent = $message.intent.intent
        const findedEntity = $message.entities.find((item) => item.type == "domaine")

        const query = search(offer, "offer", intent, findedEntity.entity).then((dbEntity) => {
            const answerArray = dbEntity.map((dbMap) => {
                return Object.assign({}, $message, { content: response + dbMap._source.url })
            })
            resolve(answerArray)
        })
    })
}



