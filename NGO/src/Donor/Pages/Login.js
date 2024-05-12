import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom"; // Import navigate
import SignUpImage from "../../shared/assets/volunteerSignUp.jpg";

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

  return (
    <>
      {/* <Outline items={items} navBarItems={navBarItems} /> */}
      <div className="min-h-screen bg-gray-50">
        <div className="flex flex-col md:flex-row">
          <div
            className="bg-cover bg-center w-full md:w-1/2 h-64 md:h-auto opacity-90"
            style={{ backgroundImage: `url(${SignUpImage})` }}
          ></div>
          <div className="min-h-screen flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8 ">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
