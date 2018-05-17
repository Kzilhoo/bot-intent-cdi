import { cdi } from './cdi'
import { search } from './infos'

export const logic = ($message) => {
    const offer = "bot-offer"
    const domain = "informatique"
    console.log($message)
    return new Promise((resolve, reject) => {
    const response = cdi[Math.floor(Math.random() * cdi.length)];
    const newMessage = Object.assign($message, { content: response })
    console.log(newMessage, search(offer,"offer",$message.intent.intent))
    resolve(newMessage,search(offer,"offer",$message.intent.intent,domain))
    })
}



