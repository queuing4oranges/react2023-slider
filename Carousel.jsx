import React, { useEffect, useState } from 'react'
import { shortList, list, longList } from './src/data'

export default function Carousel({ setCurrentPerson, currentPerson }) {
    const [people, setPeople] = useState(longList)
  
    const nextSlide = () => {
            setCurrentPerson((oldPerson) =>{
                const newPerson = (oldPerson + 1) % people.length
                return newPerson
            })
        console.log(currentPerson)
    }

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            const newPerson = (oldPerson -1 + people.length) % people.length 
            return newPerson
        })
        console.log(currentPerson)

    }

    useEffect(()=>{
        let autoSlide = setInterval(() => {
            nextSlide()
        }, 2000);
        return() => {   //runs when the component is unmounted or "currentPerson" changes
            clearInterval(autoSlide)
        }
    }, [currentPerson])

  return (
    <div className='slider-container'>
        <div 
        className="people-container"
        style={{position: "relative"}}>
            {people.map((person, index) => {
                const { id, image, name, title, quote } = person

                return(
                    <article 
                    className='slide' 
                    key={id}
                    //move slide to right with translate 100% times the index of the slide
                    style={{transform:`translateX(${100*(index-currentPerson)}%)`}}
                    >
                        <img 
                        src={image} 
                        alt={name}
                        className='person-img'
                        />

                        <h2
                        className='name'>{name}</h2>
                        <p className='title'>{title}</p>
                        <p 
                        className='text'>{quote}</p>
                    </article>
                )
            })}
            </div>
        <button style={{position: "absolute"}} onClick={prevSlide} className='prev'></button>
        <button style={{position: "absolute"}} onClick={nextSlide} className='next'></button>

    </div>
  )
}
