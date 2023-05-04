import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { longList } from './src/data';

export default function CarouselSlider() {

    const [people, setPeople] = useState(longList)
    console.log(people)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true, 
      autoplay: true, 
      autoplaySpeed: 2000
    };
    return (
      <div className='slick-container'>
        <Slider {...settings}>
            {people.map((person) => {
            
            return (
            <article key={person.id}>
            <img src={person.image} alt={person.name} className='person-img' /> 
            <p>{person.name}</p> 
            <p>{person.title}</p>  
            <p>{person.quote}</p>            

            </article> 
                )


            })}
                

        </Slider>
      </div>
    );
  }


