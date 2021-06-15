import axios from "axios";

const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_USERLIST = "UPDATE_USERLIST";

const initialState = {
  name: "Pavel",
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case UPDATE_USERLIST: {
      return {
        ...state,
        list: action.list,
      };
    }

    default:
      return state;
  }
};

export function updateUserName(name) {
  return { type: UPDATE_USERNAME, name };
}

export function updateUserList() {
  return (dispatch, getState) => {
    const store = getState();
    const { name } = store.users;
    axios(`https://api.github.com/users/${name}/repos`).then(({ data }) =>
      dispatch({ type: UPDATE_USERLIST, list: data })
    );
  };
}
