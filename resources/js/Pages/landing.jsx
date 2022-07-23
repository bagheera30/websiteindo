import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { BsFillBellFill } from "react-icons/bs";

export default function landing(props) {
    return (
        <>
            <Head title="indo ku" />
            <Navbar />
            <div className="bg-amber-100 min-h-screen text-8xl">
                <div className="mx-10">
                    <div className="flex ">
                        <h1 className="flex space-x-2 my-10 ">Your</h1>
                        <BsFillBellFill
                            size="6rem"
                            color="black"
                            className="my-10"
                        />
                    </div>
                    <div>
                        <h1 className="text-8xl">Rebahan</h1>
                        <h1 className="flex text-8xl">Partner</h1>
                        <p className="text-2xl font-serif">
                            website untuk belajar dan pengingat belajar dan seru
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
