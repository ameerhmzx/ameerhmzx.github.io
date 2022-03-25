import Logo from "./logo";
import {PropsWithChildren, useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
import {Router} from "next/router";

export default function Preloader({children}: PropsWithChildren<any>) {
    const [isLoading, setIsLoading] = useState(true);
    const minimumLoaderDuration = 500;

    Router.events.on("routeChangeStart", () => {
        setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
        setTimeout(() => setIsLoading(false), minimumLoaderDuration);
    });

    Router.events.on("routeChangeError", () => {
        setTimeout(() => setIsLoading(false), minimumLoaderDuration);
    });

    useEffect(() => {
        // Initial Preloader Anim
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    return (
        <>
            <Transition
                show={isLoading}
                leave="transition-opacity duration-1000 delay-100 z-50 fixed"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={'w-screen h-screen text-white bg-white dark:bg-black flex items-center justify-center'}>
                    <Logo
                        className={(isLoading ? 'animate-stroke-fill dark:animate-stroke-fill-dark' : 'logo-transparent') + ' w-20 sm:w-32 h-auto'}/>
                </div>
            </Transition>
            {!isLoading && children}
        </>
    );
}