import { UserService } from './../userService';
import { UserFactory } from '../../../../tests/factories';

const userService = new UserService();

describe('UserService', () => {
    it('should return all users', async () => {
        await UserFactory.make().save();

        const users = await userService.getAllUsers();
        expect(users.length).toBe(1);
    });
});
