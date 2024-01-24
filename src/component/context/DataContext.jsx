import React, { createContext, useState } from "react";
export const DataContext = createContext();

const DataContentProvider = ({ children }) => {
  const [createDrawer, setCreateDrawer] = useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [courses, setCourse] = useState([]);
  const [editCourse, setEditCourse] = useState({});
  const addCourse = (newCourse) => {
    setCourse([...courses, newCourse]);
  };
  const updateNewCourse = (newCourse) => {
    setCourse(
      courses.map((course) => {
        if (course.id === newCourse.id) {
          return newCourse;
        }
        return course;
      })
    );
  };
  const DeleteCourse = (id) => {
    setCourse(courses.filter((course) => course.id != id));
  };
  const toggleCreateDrawer = () => {
    setCreateDrawer(!createDrawer);
  };

  const toggleEditDrawer = () => {
    setEditDrawer(!editDrawer);
  };
  return (
    <DataContext.Provider
      value={{
        toggleCreateDrawer,
        createDrawer,
        editDrawer,
        toggleEditDrawer,
        courses,
        setCourse,
        addCourse,
        DeleteCourse,
        editCourse,
        setEditCourse,
        updateNewCourse,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContentProvider;
