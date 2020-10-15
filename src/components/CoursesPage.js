import React,{useState,useEffect} from 'react';
import { getCourses } from "../api/courseApi";
import CoursesList from './CourseList'

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_course => setCourses(_course));
    }, [])
     
    
    return (
        <>
        <h2>Courses</h2>
        <CoursesList courses={courses} headre="hello" />
        </>
        );
    }


export default CoursesPage;