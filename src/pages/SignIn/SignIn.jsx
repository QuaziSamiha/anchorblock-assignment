/* eslint-disable no-unused-vars */
import { GiStack } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../app/authMiddleware";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const location = useLocation();
  const navigation = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(signIn(data.email, data.password, location, navigation));
  };

  return (
    <>
      <section className="flex justify-center items-center my-12">
        <div className="w-[444px] h-[576px] flex justify-start shadow-2xl rounded-lg border border-[#f0f0f0] shadow-[#f0f0f1]">
          <div className="mx-12 my-14 w-full">
            <div className="flex items-center h-[46px] w-[159px]">
              <GiStack className="w-[51px] h-6 text-[#6941C6] mr-3" />
              <h1 className="text-[28px] font-bold text-[#4E5D78]">Stack</h1>
            </div>
            <p className="text-xl text-[#404040] font-semibold mt-4 mb-6">
              Sign In to continue with stack
            </p>
            <div className="mb-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="h-[96px]">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#344054] font-medium block my-2"
                  >
                    Email:
                  </label>
                  <input
                    placeholder="Enter Email"
                    className={`w-[320px] h-[44px] outline-0 block ring-offset-1 ring-4 rounded-md px-2 text-base text-[#101828] 
                    ${
                      errors.password
                        ? "ring-[#fbe1df] ring-offset-[#F04438]"
                        : "ring-[#ecdefd] ring-offset-[#d6bbfb]"
                    }`}
                    type="email"
                    id="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="h-5 my-2 text-sm text-[#F04438]">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="h-[96px]">
                  <label
                    htmlFor="password"
                    className="text-sm text-[#344054] font-medium block my-2"
                  >
                    Password:
                  </label>
                  <input
                    placeholder="Enter Password"
                    className={`w-[320px] h-[44px] outline-0 block ring-offset-1 ring-4 rounded-md px-2 text-base text-[#101828] 
                    ${
                      errors.password
                        ? "ring-[#fbe1df] ring-offset-[#F04438]"
                        : "ring-[#ecdefd] ring-offset-[#d6bbfb]"
                    }`}
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors.password && (
                    <p className="h-5 my-2 text-sm text-[#F04438]">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="h-1 w-[320px] flex my-3">
                  <div className="w-[42px] h-1 bg-[#F04438] rounded "></div>
                  <div className="w-[42px] h-1 bg-[#F04438] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                  <div className="w-[42px] h-1 bg-[#f3f3f3] rounded ml-3"></div>
                </div>
                <input
                  className="mt-2 cursor-pointer  bg-[#6941c6] text-white w-[320px] h-[44px] text-center align-middle rounded-md"
                  type="submit"
                  value="Sign In"
                  disabled={loading}
                />
              </form>
            </div>
            <p className="text-base font-medium text-[#B0B7C3] my-6">
              Don&apos;t have an account?
              <Link className="text-[#377DFF] ml-2" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
