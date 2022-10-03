import { Link } from "@inertiajs/inertia-react";

import {
    BsChevronBarContract,
    BsFillBellFill,
    BsPersonCircle,
} from "react-icons/bs";

const SBar = () => {
    return (
        <>
            <div>
                <div className="bg-Slate-900 right-5  inset-y-5 fixed lg:hidden ">
                    <button className="btn right-0 inset-y-0 ">
                        <Link href={route("login")}> LOGIN</Link>
                    </button>
                </div>
                <div className="h-screen right-0 inset-y-0 w-96 fixed bg-teal-300 md:block sm:hidden">
                    <div className="h-80 mx-40 justify-center py-20">
                        <BsPersonCircle size={"10rem"} />
                    </div>
                    <div className="h-screen right-0  py-0 w-96 fixed bg-teal-300 md:block sm:hidden">
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Email</span>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span>Password</span>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SBar;
