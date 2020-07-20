import axios from "axios";

// ACTION TYPES
const GET_ALL_REFLECTIONS = "GET_ALL_REFLECTIONS";
const CREATE_REFLECTION = "CREATE_REFLECTION";

// ACTION CREATORS
const getAllReflections = (reflections) => ({
  type: GET_ALL_REFLECTIONS,
  reflections
});

const createReflection = (reflection) => ({
  type: CREATE_REFLECTION,
  reflection,
});

//THUNK CREATORS
export const fetchAllReflections = () => async (dispatch) => {
  const {data} = await axios.get('/api/reflections');
  dispatch(getAllReflections(data));
}

export const fetchCreateReflection = (reflectionToCreate) => async (
  dispatch
) => {
  const { data } = await axios.post(
    `/api/reflections/create`,
    reflectionToCreate
  );
  dispatch(createReflection(data));
};

//REDUCER

export default function(state = [], action){
  switch(action.type) {
    case GET_ALL_REFLECTIONS:
      return [... action.reflections];
    case CREATE_REFLECTION:
      return [...state, action.reflection];
    default:
      return state
  }
}