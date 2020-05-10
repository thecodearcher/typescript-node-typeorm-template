import { UserService } from './../userService';
import { UserFactory } from '../../../../tests/factories';

let userService: UserService;

describe('UserService', () => {
    beforeEach(() => {
        userService = new UserService();
    });

    it('should return all users', async () => {
        await UserFactory.make().save();

        const users = await userService.getAllUsers();
        expect(users.length).toBe(1);
    });
});
