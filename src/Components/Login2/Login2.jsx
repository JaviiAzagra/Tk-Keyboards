import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, newUser } from "../../Redux/auth/auth.actions";
import "./Login2.scss";

import axios from "axios";

const Login2 = ({ type, className }) => {
  //LOGIN
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToRegister = () => {
    setShowLogin(!showLogin);
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const { isLoading } = useSelector((state) => state.auth);
  const [error, setError] = useState(null);

  const clearErrors = () => {
    setError(null);
  };

  const send = async (formData) => {
    try {
      dispatch(loginUser(formData, navigate));
      const response = await axios.post(
        "https://tkkeyboards-api.vercel.app/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.data.error) {
        setTimeout(() => {
          setError("Incorrect Email or Password!");
        }, 0);
      } else {
        clearErrors();
      }
    } catch (error) {
      setTimeout(() => {
        setError("Incorrect Email or Password!");
      }, 0);
    }
  };

  const [form, setform] = useState(type);

  //REGISTER

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const sendRegister = async (formData) => {
    // Verifica si los términos y condiciones han sido aceptados
    if (!acceptedTerms) {
      setError("Debes aceptar los términos y condiciones para registrarte.");
      return;
    }

    dispatch(newUser(formData, setform));
    setShowLogin(true);
  };

  const goToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="formLogin__box">
      <div className="formLogin">
        {isLoading && (
          <div className="formLogin__form">{/*  <Loader /> */}</div>
        )}
        {!isLoading && (
          <>
            {form === "login" && (
              <>
                <div className="login-container">
                  <form onSubmit={handleSubmit(send)} className="login">
                    <div className="login--top">
                      <img src="/assets/logotk.png" alt="logotk" />
                      <h2>Sign in to TkKeyboards</h2>
                    </div>
                    <div>
                      <label>
                        Email
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: "Introduce un email valido, por favor",
                            minLength: {
                              value: 2,
                              message: "el email tiene que ser mas largo",
                            },
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Introduce un email con formato valido",
                            },
                          })}
                        />
                        {errors.email ? (
                          <>
                            {errors.email.type === "required" && (
                              <div style={{ color: "red" }}>
                                {errors.email.message}
                              </div>
                            )}
                            {errors.email.type === "minLength" && (
                              <div style={{ color: "red" }}>
                                {errors.email.message}
                              </div>
                            )}
                            {errors.email.type === "pattern" && (
                              <div style={{ color: "red" }}>
                                {errors.email.message}
                              </div>
                            )}
                          </>
                        ) : null}
                      </label>
                    </div>
                    <div>
                      <label>
                        Password
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          {...register("password", {
                            required:
                              "Introduce una contraseña válida, por favor",
                            minLength: {
                              value: 6, // Adjust the minimum length as needed
                              message:
                                "La contraseña debe tener al menos 6 caracteres",
                            },
                          })}
                        />
                        <div>
                          <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? "Hide" : "Show"} Password
                          </button>
                        </div>
                        {/* {errors.password && <p>{errors.password.message}</p>} */}
                        {error && <div style={{ color: "red" }}>{error}</div>}
                      </label>
                    </div>
                    <button type="submit" disabled={!isValid}>
                      Continue
                    </button>
                  </form>
                  <div class="between-lines_wrapper__QeHD9 between-lines_wrapper-solid__XGDPf">
                    OR
                  </div>
                  <div className="go-to-register-button">
                    <p>
                      Dont´t have an account?{" "}
                      <Link onClick={() => setform("regist")}>Sign up</Link>
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* //* FORMULARIO DE REGISTRO  */}

            {form === "regist" && (
              <div className="register-container">
                <form
                  onSubmit={handleSubmit(sendRegister)}
                  className="register"
                >
                  <img src="/assets/logotk.png" alt="logotk" />
                  <h2>Sign up to TkKeyboards</h2>
                  <div className="form">
                    <div>
                      <label>
                        First Name
                        <input
                          type="text"
                          name="name"
                          {...register("name", {
                            required: true,
                          })}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Last Name
                        <input
                          type="text"
                          name="surname"
                          {...register("surname", {
                            required: true,
                          })}
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        Email
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                          })}
                        />
                        {errors.email?.type === "required" && (
                          <p style={{ color: "red" }}>
                            El campo Email es requerido
                          </p>
                        )}
                        {errors.email?.type === "pattern" && (
                          <p style={{ color: "red" }}>
                            El formato del Email es incorrecto
                          </p>
                        )}
                      </label>
                    </div>
                    <div className="form--password">
                      <label>
                        Password
                        <input
                          type="password"
                          name="password"
                          onInput={(event) => handlePassword(event)}
                          {...register("password", {
                            required: true,
                            minLength: {
                              value: 8,
                              message: "Introduce mínimo 8 caracteres",
                            },
                          })}
                        />
                        {errors.password?.type === "required" && (
                          <p style={{ color: "red" }}>
                            El campo Password es requerido
                          </p>
                        )}
                        {errors.password && <p>{errors.password.message}</p>}
                      </label>
                      <label>
                        Repeat Password:
                        <input
                          name="password"
                          type="password"
                          {...register("password_repeat", {
                            required: true,
                            validate: (value) =>
                              value === password || "Los password no coinciden",
                          })}
                        />
                        {errors.password_repeat?.type === "required" && (
                          <p style={{ color: "red" }}>
                            El campo Repetir Password es requerido
                          </p>
                        )}
                        {errors.password_repeat && (
                          <p style={{ color: "red" }}>
                            {errors.password_repeat.message}
                          </p>
                        )}
                      </label>
                    </div>
                    {/* <label className="rol">
                      Rol:
                      <select
                        name="rol"
                        id="rol"
                        {...register("rol", {
                          required: true,
                        })}
                      >
                        <option disabled selected value>
                          selecciona una opción
                        </option>
                        <option id="rol">teachers</option>
                        <option id="rol">education student</option>
                        <option id="rol">other</option>
                      </select>
                    </label> */}
                    <div className="terminos">
                      <input
                        type="checkbox"
                        name="acceptedTerms"
                        checked={acceptedTerms}
                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                      />
                      <p>
                        I accept the{" "}
                        <Link to="/terms-of-services">Terms of Service</Link>{" "}
                        and have read the
                        <Link to="/privacy-notice"> Privacy Notice</Link>
                      </p>
                    </div>
                    {error && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          width: "300px",
                        }}
                      >
                        {error}
                      </div>
                    )}
                  </div>
                  <button type="submit" disabled={!isValid}>
                    Register
                  </button>
                </form>
                <div class="between-lines_wrapper__QeHD9 between-lines_wrapper-solid__XGDPf">
                  OR
                </div>
                <div className="go-to-login-button">
                  <p>
                    Already have an account?{" "}
                    <Link onClick={() => setform("login")}>Sign in</Link>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Login2;
