import axios from "axios";

//action types
const DUMMY = "DUMMY";

//action creator
export const dummyActionCreator = (dummy) => ({
  type: DUMMY,
  dummy,
});

//thunk creator
// export const dummyThunk = () => {
//     return async (dispatch) => {
//         try {
//             const {data} = await axios.get('/api/someroute')
//             dispatch(dummyActionCreator(data))
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }

const initalState = {};

const dummyReducer = (state = initalState, action) => {
  switch (action.type) {
    case DUMMY:
      return { ...state };
    default:
      return state;
  }
};

export default dummyReducer;
