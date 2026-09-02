
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMatch } from 'react-router-dom'

import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'

import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'

import Navbar from './components/student/Navbar'

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Routes>

        {/* Student Routes */}
        <Route path="/" element={<Home />} />

        <Route
          path="/course-list"
          element={<CoursesList />}
        />

        <Route
          path="/course-list/:input"
          element={<CoursesList />}
        />

        <Route
          path="/course/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/my-enrollments"
          element={<MyEnrollments />}
        />

        <Route
          path="/player/:courseId"
          element={<Player />}
        />

        <Route
          path="/loading/:path"
          element={<Loading />}
        />


        {/* Educator Routes */}
        <Route
          path="/educator"
          element={<Educator />}
        >

          {/* /educator */}
          <Route
            index
            element={<Dashboard />}
          />

          {/* /educator/add-course */}
          <Route
            path="add-course"
            element={<AddCourse />}
          />

          {/* /educator/my-courses */}
          <Route
            path="my-courses"
            element={<MyCourses />}
          />

          {/* /educator/students-enrollments */}
          <Route
            path="students-enrollments"
            element={<StudentsEnrolled />}
          />

        </Route>

      </Routes>

    </div>
  )
}

export default App

