import { Link } from "@inertiajs/inertia-react";

import {
    BsChevronBarContract,
    BsFillBellFill,
    BsPersonCircle,
} from "react-icons/bs";

const SBar = () => {
    return (
        <div className="h-screen right-0  inset-y-0 w-96 fixed bg-teal-300">
            <div className="h-90 mx-40 justify-center py-20">
                <BsPersonCircle size={"10rem"} />
            </div>
            <div className="form-control ">
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered"
                    />
                </label>
                <Link href={route("login")} className="link">
                    I'm a simple link
                </Link>
            </div>
        </div>
    );
};
export default SBar;
