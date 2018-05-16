import test from 'ava'
import { logic } from '../src/logic'
import { cdi }  from '../src/cdi'
import { exists } from 'fs';

test(t => {
    return logic({ message: { content: 'taGrandeRace' } }).then(element => {
        t.true(cdi.includes(element.message.content))
    })
})
