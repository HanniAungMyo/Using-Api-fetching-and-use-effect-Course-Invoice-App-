import React, { useCallback, useContext } from "react";
import Heading from "./component/Heading";
import Container from "./component/Container";
import CourseTable from "./component/CourseTable";
import RowGroup from "./component/RowGroup";
import CreateDrawer from "./component/CreateDrawer";
import EditDrawer from "./component/EditDrawer";
import { DataContext } from "./component/context/DataContext";

const App = () => {
  const {editDrawer}=useContext(DataContext)
  return (
    <Container>
      <Heading />
      <CourseTable />
      <CreateDrawer />
      {editDrawer && <EditDrawer /> }
    </Container>
  );
};

export default App;
