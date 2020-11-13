import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./components/LikeButton";
import Hello from "./components/Hello";
import CounterWrapper from "./components/CounterWrapper";
import BizDemoPercent from "./components/BizDemoPercent";
import BizDemoAverage from "./components/BizDemoAverage";
import BizDemoDoubleY from "./components/BizDemoDoubleY";
// import useURLLoader from "./hooks/useURLLoader";
import ReactDndDemo from "./ReactDndDemo";
import ReactSortableDemo from "./ReactSortableDemo";
import ReactSortableHocDemo from "./ReactSortableHocDemo/index.jsx";
import ReactDndSortableDemo from "./ReactDndSortableDemo";
import H5EditorDemo from "./H5EditorDemo";

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};

export const ThemeContext = React.createContext(themes.light);

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <H5EditorDemo />
          <ReactDndSortableDemo />
          <ReactSortableHocDemo />
          <ReactSortableDemo />
          <ReactDndDemo />
          <BizDemoDoubleY />
          <BizDemoPercent />
          <BizDemoAverage />
          <CounterWrapper />
          <img src={logo} className="App-logo" alt="logo" />
          <LikeButton />
          <Hello />
          <p>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              Refresh dog photo
            </button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
