import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as coursApi from "../api/courseApi";
import { toast, Toast } from "react-toastify";

const ManageCoursePage = (props) => {
  debugger;
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      coursApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    coursApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Cours saved!");
    });
  }

  return (
    <>
      <h2> Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to live?" />
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
