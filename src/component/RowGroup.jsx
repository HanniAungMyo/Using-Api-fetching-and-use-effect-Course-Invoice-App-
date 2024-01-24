import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./LoaderRow";
import { DataContext } from "./context/DataContext";
import EmptyRow from "./EmptyRow";

const RowGroup = () => {
  const { courses, setCourse } = useContext(DataContext);
  const [ready, setReady] = useState(true);
  // console.log(courses);
  const LoaderRowCount = Array.from({ length: 5 }, (_, index) => index);
  useEffect(() => {
    const fetCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const json = await res.json();
      setCourse(json);
      setReady(false);
    };
    fetCourses();
  }, []);
  return (
    <>
      {ready && LoaderRowCount.map((el, index) => <LoaderRow key={index} />)}
      {!ready &&
        (courses.length ? (
          courses.map((course) => <Row key={course.id} course={course} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;
