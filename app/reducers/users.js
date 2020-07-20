import axios from "axios";

// ACTION TYPES
const GET_ALL_USERS = "GET_ALL_USERS";
const CREATE_USER = "CREATE_USER";

// ACTION CREATORS
const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users
});

const createUser = (userToCreate) => ({
  type: CREATE_USER,
  userToCreate,
});

// THUNK CREATORS
export const fetchAllUsers = () => async (dispatch) => {
  const {data} = await axios.get('/api/users');
  dispatch(getAllUsers(data));
}

export const fetchCreateUser = (userToCreate) => async (dispatch) => {
  const { data } = await axios.post(`/api/signup`, userToCreate);
  dispatch(createUser(data));
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: action.users };
    case CREATE_USER:
      return { ...state, allUsers: allUsers.push(action.user) };
    default:
      return state;
  }
}