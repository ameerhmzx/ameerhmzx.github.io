import Head from "next/head";
import {PropsWithChildren} from "react";

export default function BaseLayout({children}: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Ameer Hamza Naveed</title>
        <link rel="icon" href={"/favicon.ico"}/>
        <meta name="description" content="Personal portfolio website"/>
      </Head>
      {children}
    </>
  );
}