import { userDAO } from '../dao/users.js';

class UserService {
  async login(email, password) {
    console.log('LOGGING IN');
    const user = await userDAO.getUserByEmail(email);
    console.log(`user: ${JSON.stringify(user)}`);
    return user.length > 0 && user[0].password === password ? true : false;
  }
}

export const userService = new UserService();
