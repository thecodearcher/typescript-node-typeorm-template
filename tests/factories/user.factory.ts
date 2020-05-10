import { Users } from '../../src/api';
import { Factory } from './factory';

const factory = new Factory<Users>(Users);

factory.define((faker) => {
    return {
        firstName: faker.name.firstName(1),
        lastName: faker.name.lastName(1),
        phoneNumber: faker.phone.phoneNumber(),
    };

});

export const UserFactory = factory;
