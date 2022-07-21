import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

export default function landing(props) {
    return (
        <>
            <Head title={props.judul} />
            <Navbar />
        </>
    );
}
