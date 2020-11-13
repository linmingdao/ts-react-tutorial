import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Container from "./Container";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
