import Head from 'next/head'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { error } from "../store/error/action";

export default function Home() {

    const dispatch = useDispatch();
    
    const errorMessage = useSelector((state) => state.errorMessage);

    const errorTimer = useRef("");

    const errorId = errorMessage.id;

    useEffect(() => {
        clearTimeout(errorTimer.current)

        errorTimer.current = setTimeout(() => {
            dispatch(error("", "", false, errorId));
        }, 1000);

        return () => {
            clearTimeout(errorTimer.current);
        }
    }, [errorId])

    return (
        <div className="flex bg-gray-200 flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to{" "}
                    <a className="text-blue-600" href="https://nextjs.org">
                    Next.js!
                    </a>
                </h1>

                <p className="mt-3 text-2xl">
                    Get started by editing{" "}
                    <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                    pages/index.js
                    </code>
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <h6
                        onClick={()=>{dispatch(error("don't click on this row first", "warning", true, Math.random()));}}
                        style={{ cursor: "pointer" }}
                        className="p-6 mt-6 text-left border border-blue-500 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                        <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Find in-depth information about Next.js features and API.
                        </p>
                    </h6>

                    <h6
                        onClick={()=>{dispatch(error("don't click on this row second", "warning", true, Math.random()));}}
                        style={{ cursor: "pointer" }}
                        className="p-6 mt-6 text-left border border-blue-500 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                        <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Learn about Next.js in an interactive course with quizzes!
                        </p>
                    </h6>

                    <h6
                        onClick={()=>{dispatch(error("don't click on the second row first", "fatal", true, Math.random()));}}
                        style={{ cursor: "pointer" }}
                        className="p-6 mt-6 text-left border border-blue-500 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                        <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Discover and deploy boilerplate example Next.js projects.
                        </p>
                    </h6>

                    <h6
                        onClick={()=>{dispatch(error("don't click on the second row second", "fatal", true, Math.random()));}}
                        style={{ cursor: "pointer" }}
                        className="p-6 mt-6 text-left border border-blue-500 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                        <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </h6>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
                </a>
            </footer>

            <div className="grid grid-col sticky w-full top-0">
                {errorMessage.show === true &&
                    (
                        <div className={`w-scrren col-span-2 flex justify-center items-center h-12 py-1
                            ${errorMessage.level === 'fatal' ? 'bg-red-300'
                            : errorMessage.level === 'warning' ? 'bg-yellow-200'
                            :'bg-green-300'}`}>
                            <p className=" font-bold">{errorMessage.message}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
}
