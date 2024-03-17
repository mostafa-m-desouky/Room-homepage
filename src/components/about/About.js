import React from 'react'
import './about.css'
// <img src={props.dark} alt="dark" />
const About = (props) => {
  return (
    <section className="sec-2 grid grid-cols-1 lg:grid-cols-3">
    <div style={{ backgroundImage: `url(${props.dark})` }}></div>

    <article className="text-box">
      <h2>
        About our furniture
      </h2>
      <p>
        Our multifunctional collection blends design and function to suit
        your individual taste. Make each room unique, or pick a cohesive
        theme that best express your interests and what inspires you. Find
        the furniture pieces you need, from traditional to contemporary
        styles or anything in between. Product specialists are available to
        help you create your dream space.
      </p>
    </article>
    <div style={{ backgroundImage: `url(${props.light})` }}></div>
    </section>
    )
}
// <article>
//   <img src={props.light} alt="light" />
// </article>

export default About
