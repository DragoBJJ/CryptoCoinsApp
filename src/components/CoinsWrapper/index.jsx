import React from "react";
import { Wrapper, Alert } from "./CoinsWrapper";

const CoinsWrapper = ({ children }) => {
  return (
    <Wrapper>
      {children.length ? children : <Alert>There is no such currency</Alert>}
    </Wrapper>
  );
};

export default CoinsWrapper;
