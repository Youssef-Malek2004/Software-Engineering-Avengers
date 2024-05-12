import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom"; // Import navigate
import SignUpImage from "../../shared/assets/volunteerSignUp.jpg";
import backgroundImage from "../../shared/assets/background2.png";
import logoPic from "../../shared/assets/NGO-Logo-Small.png";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check username and password and navigate accordingly
    if (
      formData.usernameOrEmail === "admin@hotmail.com" &&
      formData.password === "admin123"
    ) {
      navigate("/admin/home");
    } else if (
      formData.usernameOrEmail === "org@hotmail.com" &&
      formData.password === "org123"
    ) {
      navigate("/organization");
    } else if (
      formData.usernameOrEmail === "donor@hotmail.com" &&
      formData.password === "donor123"
    ) {
      navigate("/donor");
    } else if (
      formData.usernameOrEmail === "doctor@hotmail.com" &&
      formData.password === "doctor123"
    ) {
      navigate("/Doctor");
    } else if (
      formData.usernameOrEmail === "teacher@hotmail.com" &&
      formData.password === "teacher123"
    ) {
      navigate("/Teacher");
    } else {
      // If credentials are incorrect, you can show an error message
      console.log("Invalid username or password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUpClick = () => {
    navigate("/signUp"); // Navigate to the sign-up page
  };

  return (
    <>
      {/* <Outline items={items} navBarItems={navBarItems} /> */}
      <div
        className="min-h-screen  bg-cover bg-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="h-screen ">
          <div className="min-h-screen items-center w-1/2 justify-center  my-auto flex flex-col">
            <div className="flex items-center justify-center">
              <img src={logoPic} alt="Logo" className="w-16 h-16 mr-2" />
              <h1 className="text-3xl font-semibold text-pink-800">
                BrightHorizon
              </h1>
            </div>
            <div
              className="flex items-center justify-center px-4 sm:px-6 lg:px-8 rounded-lg"
              style={{
                background: "linear-gradient(to right, #9B1B59, #6b2d98)",
              }}
            >
              <div
                className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8 rounded-full w-full"
                style={{
                  background: "linear-gradient(to right, #9B1B59, #6b2d98)",
                }}
              >
                <div className="max-w-md w-full rounded-full space-y-8">
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Log In
                  </h2>
                  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="usernameOrEmail" className="sr-only">
                        Username or Email
                      </label>
                      <input
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        type="text"
                        autoComplete="usernameOrEmail"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Username or Email"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                  <button
                    onClick={handleSignUpClick}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Dont have an account? Sign up here
                  </button>
                </div>
              </div>
            </div>
            <footer className="text-center text-gray-500 text-sm py-4">
              All rights reserved &copy; {new Date().getFullYear()}{" "}
              BrightHorizon
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
