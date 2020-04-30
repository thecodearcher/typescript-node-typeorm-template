import { BASE_PATH } from '../../config';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

// begin a test suite of one or more tests
describe('#UserService()', () => {
    // test a functionality
    it('should GET all users', (done) => {
        // add an assertion

        chai.request(app)
            .get(`${BASE_PATH}/user`)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                done();
            });
    });

    // ...some more tests

});
