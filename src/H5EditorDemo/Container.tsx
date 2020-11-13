import React from "react";
import { connect } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import FormPanel from "./FormPanel";
import Box from "./Box";
import "./index.css";

const Container: React.FC = (props: any) => {
  const { basics } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h5-box">
        <div className="left-region">
          {basics.map((item: any) => (
            <Box key={item.id} name={item.name} preference={item} />
          ))}
        </div>
        <div className="right-region">
          <FormPanel />
        </div>
      </div>
    </DndProvider>
  );
};

export default connect(function mapStateToProps(state: any) {
  return {
    basics: state.library.basics,
  };
})(Container);
