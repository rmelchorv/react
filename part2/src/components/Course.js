import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <h3>total of {
          course.parts.reduce((total, p) => {
            return total + p.exercises
          }, 0)
        } exercises
      </h3>
    </>
  )
}
export default Course