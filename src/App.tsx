import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import H5Editor from "./H5Editor";

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
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <H5Editor />
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
