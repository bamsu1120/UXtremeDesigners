// SignUp.tsx
import { NavLink } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="page">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <div className="horizontal-line"></div>

        <form className="signup-form">
          {/* Username Field */}
          <div className="input-container">
            <div className="input-label">Username</div>
            <input type="text" className="custom-input" placeholder="" />
          </div>

          {/* Email Field */}
          <div className="input-container">
            <div className="input-label">Email</div>
            <input type="email" className="custom-input" placeholder="" />
          </div>

          {/* Password Field */}
          <div className="input-container">
            <div className="input-label">Password</div>
            <input type="password" className="custom-input" placeholder="" />
          </div>

          {/* Confirm Password Field */}
          <div className="input-container">
            <div className="input-label">Confirm Password</div>
            <input type="password" className="custom-input" placeholder="" />
          </div>

          {/* Checkbox Section */}
          <div className="checkbox-container">
            <input type="checkbox" id="acknowledge" />
            <label htmlFor="acknowledge">
              I acknowledge that only undergraduate or graduate Concordia
              students are allowed to use this application.
            </label>
          </div>

          <div className="bottom-container">
            {/* Register Button */}
            <NavLink to="/home" className="navlink">
              <button type="submit" className="register-button">
                Register
              </button>
            </NavLink>

            {/* Image Container */}
            <img
              src="./src/assets/conUlogo.png"
              alt="concordia"
              height={"120px"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
