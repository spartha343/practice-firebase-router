import { Link } from "react-router-dom";
import useGoogleSignIn from "../../../hooks/googleSignIn/useGoogleSignIn";
import useAuthInfo from "../../../hooks/authInfo/useAuthInfo";

const SIgnUp = () => {
  const googleSignIn = useGoogleSignIn();

  const { signUpWithEmailAndPass } = useAuthInfo();

  const handleSignUpUsingEmailAndPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signUpWithEmailAndPass(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUpUsingEmailAndPass}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/signin" className="underline">
                  Already have an account ? Sign in
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </div>
            <div className="divider"></div>
            <div className="form-control">
              <button
                type="button"
                className="btn btn-outline"
                onClick={googleSignIn}
              >
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
