const INITIAL_STATE = {
  profiles: [],
  isLoading: false,
  error: false,
};

const profilesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET APPOINTMENTS
    case "gettingProfiles":
      return { ...INITIAL_STATE, isLoading: true };
    case "getProfiles":
      return {
        ...state,
        isLoading: false,
        profiles: action.payload,
        error: false,
      };
    case "errorProfiles":
      return {
        ...state,
        isLoading: false,
        profiles: [],
        error: action.payload,
      };

    // NEW APPOINTMENT
    case "new_profiles_start":
      return {
        ...state,
        isLoading: true,
      };
    case "new_profiles_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "new_profiles_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //EDIT APPOINTMENT
    case "edit_profiles_start":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_profiles_ok":
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case "edit_profiles_error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profilesReducer;
