import React, { useCallback, useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import { counter } from "./agent";

function App() {
  const [count, setCount] = useState();

  const refreshCounter = useCallback(async () => {
    const res = await counter.getValue();
    setCount(res.toString());
  }, []);

  useEffect(() => {
    refreshCounter();
  }, []);

  const onIncrementClick = useCallback(async () => {
    await counter.increment();
    refreshCounter();
  }, [counter]);

  return (
    <div className="text-center container mx-auto">
      <header className="space-y-5 min-h-screen flex flex-col items-center justify-center text-lg">
        <img
          src={logo}
          className="pointer-events-none"
          style={{ height: "20vmin" }}
          alt="logo"
        />
        <p>Hello Internet Computer + Vite + React + Tailwind!</p>
        <p>
          <button
            className="px-8 py-2 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500"
            aria-label="Increment value"
            onClick={onIncrementClick}
          >
            ${{CountIs}}: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-600"
            href="https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${{ICSDKDocs}}
          </a>

          {" | "}
          <a
            className="text-blue-600"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${{ViteDocs}}
          </a>
          {" | "}
          <a
            className="text-blue-600"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {" | "}
          <a
            className="text-blue-600"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
