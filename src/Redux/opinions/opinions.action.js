import { API } from "../shared/service/api";
import { API2 } from "../shared/service/api";

export const getOpinions = () => async (dispatch) => {
  dispatch({ type: "gettingOpinions" });

  try {
    const result = await API.get("/opinions");
    dispatch({ type: "getOpinions", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorOpinions", payload: error.message });
  }
};

export const getOpinionAppointments = () => async (dispatch) => {
  dispatch({ type: "gettingOpinions" });

  try {
    const result = await API.get("users/id");
    const ids = result.data.opinion;
    const opinions = [];
    try {
      for (let i = 0; i < ids.length; i++) {
        const opinion = await API.get("opinions/" + ids[i]);
        opinions.push(opinion.data);
      }
    } catch (error) {
      dispatch({ type: "errorOpinions", payload: error.message });
    }

    dispatch({ type: "getOpinions", payload: opinions });
  } catch (error) {
    dispatch({ type: "errorOpinions", payload: error.message });
  }
};

export const newOpinion = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "new_opinions_start" });
  try {
    const res = await API2.post("opinions/create", formdata);
    try {
      const result = await API.get("opinions/byUser");
      dispatch({ type: "getOpinions", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorOpinions", payload: error.message });
    }
  } catch (error) {
    dispatch({ type: "new_opinions_error" });
  }
};

export const editOpinion = (formdata, navigate, id) => async (dispatch) => {
  dispatch({ type: "edit_opinions_start" });
  try {
    const result = await API2.put("opinions/edit/", formdata);
    console.log(result);
    try {
      const result = await API.get("opinions/byUser");
      dispatch({ type: "getOpinions", payload: result.data });
    } catch (error) {
      dispatch({ type: "errorOpinions", payload: error.message });
    }
    dispatch({ type: "edit_opinions_ok" });
  } catch (error) {
    dispatch({ type: "edit_opinions_error" });
  }
};
