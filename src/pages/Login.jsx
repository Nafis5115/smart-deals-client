import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const Login = () => {
  const { signInUser, googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then((data) => {
        console.log(data.user);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  const handleGoogleSingIn = () => {
    googleLogin().then((data) => {
      console.log(data);
      navigate("/");
    });
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [user, navigate, redirect]);
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>

        <p className="text-center text-sm text-gray-600 mt-2">
          Don&apos;t have an account?{" "}
          <Link
            to={"/sign-up"}
            className="text-purple-600 font-medium hover:underline"
          >
            Register Now
          </Link>
        </p>

        <form onSubmit={handleSignIn} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="smsowkothasan@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="************"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-purple-600"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-lg text-white font-semibold bg-linear-to-r from-purple-600 to-indigo-500 hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleSingIn}
          className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <svg
            viewBox="-3 0 262 262"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            fill="#000000"
            className="w-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              ></path>
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              ></path>
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              ></path>
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              ></path>
            </g>
          </svg>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
