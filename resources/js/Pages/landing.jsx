import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';

export default function landing(props) {
    return (
        <>
            <Head title={props.judul} />
            <div className="my-20  mx-10 text-6xl font-bold ">
                <h1 className="flex">{props.a}<svg width="80" height="80" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1525 4.17799C29.0947 6.16767 33.3768 11.7794 33.3768 18.3913V20.4348V25.2029V31.692L37.4638 36.7344V40.1884L40.2633 40.1884L33.3768 40.1884L18.3913 40.1884L3.4058 40.1884H0V36.7344L3.4058 32.5324V25.2029V20.4348V18.3913C3.4058 11.5231 8.02627 5.73414 14.3284 3.9631C14.5606 1.73613 16.4435 0 18.7319 0C21.0934 0 23.0231 1.84882 23.1525 4.17799ZM14.3043 41.5507V42.5725C14.3043 45.0177 16.2866 47 18.7319 47C21.1771 47 23.1594 45.0177 23.1594 42.5725V41.5507H14.3043Z" fill="#67686C" />
                </svg>
                </h1>
                <h1 className="mt-2">{props.b}</h1>
                <h1 className="mt-2">{props.c}</h1>
            </div>
        </>
    )
};