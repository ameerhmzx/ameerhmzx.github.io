import type {PropsWithChildren} from "react";
import {useEffect, useRef, useState} from "react";

export default function TypicalLayout({child}: PropsWithChildren<any>) {

    const header: any = useRef();
    const footer: any = useRef();

    const [heights, setHeights] = useState({header: 0, footer: 0, vp: 0});
    const [sections] = useState({
        "about": {title: "About", "ref": useRef()},
        "portfolio": {title: "Portfolio", "ref": useRef()},
        "contact": {title: "Contact", "ref": useRef()},
    });

    useEffect(() => {
        function handleResize() {
            if (header.current && footer.current) {
                setHeights({
                    header: header.current.offsetHeight,
                    footer: footer.current.offsetHeight,
                    vp: visualViewport.height
                })
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [header, footer]);

    return (
        <>
            <div
                ref={header}
                className={'w-full fixed top-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-md border-b border-gray-200 dark:border-gray-800'}>
                <div
                    className={'py-2 px-2 sm:px-8 divide-x divide-gray-200 dark:divide-gray-800 flex items-center justify-center sm:justify-end'}>
                    {Object.keys(sections).map((key) => (
                        <div className={'sm:px-4'}>
                            <div
                                onClick={() => {
                                    sections[key]['ref'].current?.scrollIntoView({behavior: "smooth"})
                                }}
                                className={'select-none px-4 text-sm cursor-pointer py-2 text-black dark:text-white hover:underline duration-300'}>
                                {sections[key]['title']}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                style={{marginBottom: heights.footer, minHeight: heights.vp - heights.header}}
                className={'bg-white dark:bg-black'}>
                {child(heights, sections)}
            </div>

            <div ref={footer} className={'-z-20 fixed bottom-0 left-0 right-0 w-full bg-black'}/>
        </>
    )
}