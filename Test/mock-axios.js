const MockAdapter = require( "axios-mock-adapter");
const axios = require( "axios");
const mock = new MockAdapter(axios);

afterEach(() => mock.reset());

// export default mock;
