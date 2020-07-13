import axios from 'axios';

// ACTION TYPES
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_SINGLE_USER = 'GET_SINGLE_USER'
const CREATE_USER = 'GREATE_USER'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

// ACTION CREATORS
const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users
});

const getSingleUser = (user) => ({
  type: GET_SINGLE_USER,
  user
})

const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});

const deleteUser = (user) => ({
  type: DELETE_USER,
  user
});

const createUser = (userToCreate) => ({
  type: CREATE_USER,
  userToCreate
});

// THUNK CREATORS
export const getAllUsers = () => async (dispatch) => {
  const {data} = await axios.get('/api/users');
  dispatch(getAllUsers(data));
}

export const getSingleUser = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/users/${id}`);
  dispatch(getSingleUser(data));
}

export const updateUser = (id, userToUpdate) => async (dispatch) => {
  const {data} = await axios.put(`/api/users/${id}`, userToUpdate);
  dispatch(updateUser(data));
}

export const createUser = (userToCreate) => async (dispatch) => {
  const {data} = await axios.post(`/api/signup`, userToCreate);
  dispatch(createUser(data));
}

export const deleteUser = (id) => async (dispatch) => {
  const {data} = await axios.delete(`/api/users/${id}`);
  dispatch(deleteUser(data));
}


// REDUCER
const initialState = {
  allUsers: [],
  singleUser: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, allUsers: action.users};
    case GET_SINGLE_USER:
      return {...state, singleUser: action.user};
    case UPDATE_USER:
      return {...state, singleUser: action.user};
    case CREATE_USER:
      return {...state, allUsers: allUsers.push(action.user)};
    case DELETE_USER:
      return {...state, allUsers: allUsers.filter(user => user !== action.user)};
    default:
      return state;
  }
}

export default userReducer
