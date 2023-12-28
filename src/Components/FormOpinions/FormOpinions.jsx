import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editOpinion,
  getOpinions,
  newOpinion,
} from "../../Redux/opinions/opinions.action";
import Loader from "../Loader/Loader";
import { useForm } from "react-hook-form";

const FormOpinions = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const [edit, setEdit] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { opinions, isLoading, error } = useSelector((state) => state.opinions);

  useEffect(() => {
    dispatch(getOpinions());
  }, []);

  useEffect(() => {
    reset(opinions[0]);
  }, [opinions]);

  const createNewOpinion = (data) => {
    const formData = new FormData();
    formData.append("opinion", data.opinion);
    formData.append("stars", data.stars);
    dispatch(newOpinion(formData));
  };

  const editOpinionData = (data) => {
    const formData = new FormData();
    formData.append("opinion", data.opinion);
    formData.append("stars", data.stars);
    dispatch(editOpinion(formData));
    setEdit(false);
  };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        /* opinions.length <= 0 && */ <>
          <form onSubmit={handleSubmit(createNewOpinion)}>
            <div>
              <label>
                Opinion:
                <input
                  type="text"
                  name="opinion"
                  id="opinion"
                  placeholder="Opinion"
                  {...register("opinion", { required: true })}
                />
              </label>
            </div>
            <div>
              <label>
                Stars:
                <select
                  name="stars"
                  id="stars"
                  {...register("stars", {
                    required: true,
                  })}
                >
                  <option disabled selected value>
                    Select one
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            <button className="primary_button" type="submit">
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default FormOpinions;
