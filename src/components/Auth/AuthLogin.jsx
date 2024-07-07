import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../context";
import { loginHandler } from "../../services";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const { accessToken, username } = loginHandler(number, password);
      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      authDispatch({
        type: "SET_USERNAME_TOKEN",
        payload: username,
      });
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number<span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            placeholder="Enter Mobile Number"
            type="number"
            maxLength="10"
            required
            onChange={handleNumberChange}
            defaultValue={number}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password<span className="asterisk">*</span>{" "}
          </label>
          <input
            className="auth-input"
            placeholder="Enter Password"
            required
            onChange={handlePasswordChange}
            defaultValue={password}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      <div className="cta">
        <button className="button btn-outline-primary cursor-pointer">
          Login with Test Credentials
        </button>
      </div>
    </div>
  );
};
