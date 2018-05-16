import { cdi } from './cdi'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = cdi[Math.floor(Math.random() * cdi.length)];
    const newMessage = Object.assign($message.message, { content: response })

    resolve(newMessage)
    })
}



