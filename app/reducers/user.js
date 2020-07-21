import axios from 'axios';

// ACTION TYPES
const GET_SINGLE_USER = 'GET_SINGLE_USER'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

// ACTION CREATORS
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



// THUNK CREATORS
export const fetchSingleUser = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/users/${id}`);
  dispatch(getSingleUser(data));
}

export const fetchUpdateUser = (id, userToUpdate) => async (dispatch) => {
  const {data} = await axios.put(`/api/users/${id}`, userToUpdate);
  dispatch(updateUser(data));
}

// REDUCER

export default function (state = {}, action){
  switch (action.type) {
    case GET_SINGLE_USER:
      return {... action.user};
    case UPDATE_USER:
      return {...action.user};
    default:
      return state;
  }
}


