import { cdi } from './cdi'
import { search } from './infos'

export const logic = ($message) => {
    const offer = "bot-offer"
    const domain = "informatique"
    return new Promise((resolve, reject) => {
    const response = cdi[Math.floor(Math.random() * cdi.length)];
    const intent = $message.intent.intent
    const findedEntity = $message.entities.find((item)=>item.type=="domaine")

    const query = search(offer,"offer",intent,findedEntity.entity).then((answerFindedEntity)=>{
        const findUrl = findedEntity[0]._source.url
        const newMessage = Object.assign($message, { content: response + findUrl})
        resolve(newMessage)
        })
    })
}



