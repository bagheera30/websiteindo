import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';

export default function landing(props) {
    return (
        <>
            <Head title={props.judul} />
            <div classname="carousel rounded-box">
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
                <div classname="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Burger" />
                </div>
            </div>
            # Snap to center

        </>
    )
};