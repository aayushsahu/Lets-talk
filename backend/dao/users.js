import { db } from '@letstalk/db-service';
class UserDAO {
    async getUserByEmail(email) {
       return db('users').select().where({ email: email}).catch(err => console.log(`ERROR: ${err}`)); 
    }
}
export const userDAO = new UserDAO();