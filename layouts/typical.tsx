import type {PropsWithChildren} from "react";
import {useEffect, useRef, useState} from "react";
import Logo from "../components/logo";

export default function TypicalLayout({child}: PropsWithChildren<any>) {
  const header: any = useRef();
  const footer: any = useRef();

  const [heights, setHeights]: any = useState({header: 0, footer: 0, vp: 0});
  const [sections]: any = useState({
    'about': {title: "About", ref: useRef()},
    'tools': {title: "My Tools", ref: useRef()},
    'contact': {title: "Contact", ref: useRef()},
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
        className={'w-full z-30 fixed top-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-md border-b border-gray-200 dark:border-gray-800'}>
        <div className={'flex items-center container mx-auto py-2 sm:px-8'}>
          <div className={'hidden sm:block'}>
            <Logo className={'w-auto h-12 py-1'}/>
          </div>
          <div
            className={'flex-1 flex items-center justify-center sm:justify-end'}>
            {Object.keys(sections).map((key) => (
              <div
                key={key}
                onClick={() => {
                  sections[key].ref.current?.scrollIntoView({behavior: "smooth"})
                }}
                className={'link select-none text-sm cursor-pointer py-2 px-3 text-black dark:text-white'}>
                {sections[key]['title']}
              </div>
            ))}
          </div>
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