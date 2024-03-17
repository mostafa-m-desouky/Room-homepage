import React from 'react'
import data from '../data'
import "./showCase.css"

const ShowCase = (props) => {
    const [items] = React.useState(data)
    const [slideIndex, setSlideIndex] = React.useState(1)
    const dataArr = items.data;

    function nextSlide() {
      if (slideIndex !== dataArr.length) {
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === dataArr.length) {
        setSlideIndex(1)
      }
    }
    function previousSlide() {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
      } else if (slideIndex === 1) {
        setSlideIndex(dataArr.length)
      }
    }
  return (
    <section className='show-sec'>
    {dataArr.map((item, index) => (
      <article
        key={item.id}
        className={
          slideIndex === index + 1
            ? ""
            : "hidden"
        }
      >
        <div className='img-box'>
          <picture>
            <source media="(min-width: 768px)" srcSet={item.desktop} />
            <img src={item.mobile} alt={item.title} />
          </picture>
        </div>

        <div className="article-box">
          <div className='top'>          
            <h1>
              {item.title}
            </h1>
            <p>{item.desc}</p>
            <button>
              Shop Now <img src={props.arrow} alt="arrow" />
            </button>
          </div>
          <ul>
          <li>
            <button onClick={previousSlide} >
              <img src={props.left} alt="left" />
            </button>
          </li>
          <li>
            <button onClick={nextSlide}>
              <img src={props.right} alt="right" />
            </button>
            </li>
          </ul>
        </div>
      </article>
    ))}

    </section>
  )
}

export default ShowCase
