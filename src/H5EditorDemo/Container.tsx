import React from "react";
import { connect } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import FormPanel from "./FormPanel";
import FormEditor from "./FormEditor";
import Box from "./Box";
import "./index.css";

const EditorContext = React.createContext("");

const Container: React.FC = (props: any) => {
  const { basics } = props;
  const currentEditId = "";

  return (
    <DndProvider backend={HTML5Backend}>
      <EditorContext.Provider value={currentEditId}>
        <div className="h5-box">
          <div className="left-region">
            {basics.map((item: any) => (
              <Box key={item.id} name={item.name} preference={item} />
            ))}
          </div>
          <div className="right-region">
            <FormPanel>
              <FormEditor />
            </FormPanel>
          </div>
        </div>
      </EditorContext.Provider>
    </DndProvider>
  );
};

export default connect(function mapStateToProps(state: any) {
  return {
    basics: state.library.basics,
  };
})(Container);
