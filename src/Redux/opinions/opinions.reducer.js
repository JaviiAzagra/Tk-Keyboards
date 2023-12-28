const INITIAL_STATE = {
  opinions: [],
  isLoading: false,
  error: false,
};

const opinionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET APPOINTMENTS
    case "gettingOpinions":
      return { ...INITIAL_STATE, isLoading: true };
    case "getOpinions":
      return {
        ...state,
        isLoading: false,
        opinions: action.payload,
        error: false,
      };
    case "errorOpinions":
      return {
        ...state,
        isLoading: false,
        opinions: [],
        error: action.payload,
      };

    // NEW APPOINTMENT
    case "new_opinions_start":
      return {
        ...state,
        isLoading: true,
      };
    case "new_opinions_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "new_opinions_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //EDIT APPOINTMENT
    case "edit_opinions_start":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_opinions_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "edit_opinions_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default opinionsReducer;
