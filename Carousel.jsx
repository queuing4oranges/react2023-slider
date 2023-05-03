import React, { useState } from 'react'
import { shortList, list, longList } from './src/data'

export default function Carousel({ setCurrentPerson, currentPerson }) {
    const [people, setPeople] = useState(list)
    console.log(people)
    
    //checking if slide is at the end - using prev. state value for counting
    const prevSlide = () => {
        if (currentPerson!==0){
            setCurrentPerson((currentPerson) =>{
                const newPerson = currentPerson-1
                return newPerson
            })
        } 
        console.log(currentPerson)
    }
  
    const nextSlide = () => {
        if (currentPerson!==(people.length+1)){
            setCurrentPerson((currentPerson) =>{
                const newPerson = currentPerson + 1
                return newPerson
            })
        }
        console.log(currentPerson)
    }



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
                    style={{transform:`translateX(${100*index}%)`}}
                    >
                        <img 
                        src={image} 
                        alt={name}
                        className='person-img'
                        />

                        <p
                        className='name'>{name}</p>
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
