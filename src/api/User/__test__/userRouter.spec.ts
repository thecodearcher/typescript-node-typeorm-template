import { BASE_PATH } from '../../../config';
import app from '../../../app';
import request from 'supertest';

describe('#UserService()', () => {
    it('should GET all users', async () => {
        const response = await request(app).get(`${BASE_PATH}/user`);
        expect(response.status).toBe(200);
    });

    // ...some more tests

});
