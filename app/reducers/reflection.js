import axios from 'axios';

// ACTION TYPES
const GET_SINGLE_REFLECTION = 'GET_SINGLE_REFLECTION'
const UPDATE_REFLECTION = 'UPDATE_REFLECTION'


// ACTION CREATORS
const getSingleReflection = (reflection) => ({
  type: GET_SINGLE_REFLECTION,
  reflection
});

const updateReflection = (reflection) => ({
  type: UPDATE_REFLECTION,
  reflection
});

//THUNK CREATORS
export const fetchSingleReflection = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/reflections/${id}`);
  dispatch(getSingleReflection(data));
}

export const fetchUpdateReflection = (id, reflectionToUpdate) => async (dispatch) => {
  const {data} = await axios.put(`/api/reflections/${id}`, reflectionToUpdate);
  dispatch(updateReflection(data))
}

//REDUCER
{note: 'something'}
{
  note: "something else";
}

export default function(state = {}, action){
  switch(action.type) {
    case GET_SINGLE_REFLECTION:
      return {...action.reflection};
    case UPDATE_REFLECTION:
      return { ...action.reflection};
    default:
      return state
  }
}
