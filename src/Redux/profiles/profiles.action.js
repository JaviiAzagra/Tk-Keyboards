import { API } from "../shared/service/api";
import { API2 } from "../shared/service/api";

export const getProfiles = () => async (dispatch) => {
  dispatch({ type: "gettingProfiles" });

  try {
    const result = await API.get("profiles/byUser");
    dispatch({ type: "getProfiles", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorProfiles", payload: error.message });
  }
};

export const getProfileAppointments = () => async (dispatch) => {
  dispatch({ type: "gettingProfiles" });

  try {
    const result = await API.get("users/id");
    const ids = result.data.profile;
    const profiles = [];
    try {
      for (let i = 0; i < ids.length; i++) {
        const profile = await API.get("profiles/" + ids[i]);
        profiles.push(profile.data);
      }
    } catch (error) {
      dispatch({ type: "errorProfiles", payload: error.message });
    }

    dispatch({ type: "getProfiles", payload: profiles });
  } catch (error) {
    dispatch({ type: "errorProfiles", payload: error.message });
  }
};

export const newProfile = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "new_profiles_start" });
  try {
    const res = await API2.post("profiles/create", formdata);
    try {
      const result = await API.get("profiles/byUser");
      dispatch({ type: "getProfiles", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorProfiles", payload: error.message });
    }
  } catch (error) {
    dispatch({ type: "new_profiles_error" });
  }
};

export const editProfile = (formdata, navigate, id) => async (dispatch) => {
  dispatch({ type: "edit_profiles_start" });
  try {
    const result = await API2.put("profiles/edit/", formdata);
    console.log(result);
    try {
      const result = await API.get("profiles/byUser");
      dispatch({ type: "getProfiles", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorProfiles", payload: error.message });
    }
    dispatch({ type: "edit_profiles_ok" });
  } catch (error) {
    dispatch({ type: "edit_profiles_error" });
  }
};
