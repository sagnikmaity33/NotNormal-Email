import {db} from './server/db';

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'test',
        lastName: 'testing',
    }
})

console.log('done');