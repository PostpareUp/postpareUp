
const { expect } = require("chai");
const { mount } = require("enzyme");
const sinon =  require("sinon");
const React = require("react");
const configureMockStore = require( "redux-mock-store");
const thunkMiddleware = require( "redux-thunk");
// const waitForExpect = require( "wait-for-expect");
const { Provider } = require( "react-redux");


const middlewares = [thunkMiddleware];
// const mockStore = configureMockStore(middlewares);
const initialState = {
  users: [],
  user: {},
  reflections: [],
  reflection: {}
};

const mockAxios = require( "./mock-axios");
const { getSingleUser, fetchSingleUser } = require( "../app/reducers/user");

const store = require( "../app/store");

const appReducer = require( "../app/reducers/index");
const { createStore } = require ( "redux");

const app = require("../server");
const agent = require("supertest")(app);

describe("Redux", () => {
  let fakeStore;
  beforeEach(() => {
    fakeStore = mockStore(initialState);
  });

  // Check out app/redux/campuses.js for these two tests
  describe("get single user", () => {
    it("getSingleUser action creator returns a valid action", () => {
      expect(getSingleUser(user)).to.deep.equal({
        type: "GET_SINGLE_USER",
        user,
      });
    });

    it("fetchSingleUser thunk creator returns a thunk that GETs /api/user/id", async () => {
      await fakeStore.dispatch(fetchSingleUser(1));
      const [getRequest] = mockAxios.history.get;
      expect(getRequest).to.not.equal(undefined);
      expect(getRequest.url).to.equal("/api/users/1");
      const actions = fakeStore.getActions();
      expect(actions[0].type).to.equal("GET_SINGLE_USER");
      expect(actions[0].user).to.deep.equal(user);
    });
  });

  describe("reducer", () => {
    let testStore;
    beforeEach(() => {
      testStore = createStore(appReducer);
    });

    it("*** returns the initial state by default", () => {
      const store = createStore(appReducer);

      expect(store.getState().user).to.be.an("object");
    });

    it("reduces on GET_SINGLE_USER action", () => {
      const action = { type: "GET_SINGLE_USER", user };

      const prevState = testStore.getState();
      testStore.dispatch(action);
      const newState = testStore.getState();

      expect(newState.user).to.be.deep.equal(user);
      expect(newState.user).to.not.be.equal(prevState.user);
    });
  });
});