import React, { useRef } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap/all'
// import ScrollTrigger from 'gsap/ScrollTrigger.js'

const Hero = () => {
    const mouseRef = useRef()

    useEffect(() => {
        gsap.to(mouseRef.current, {
        duration: 1.5,
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
        })
    }, []) // runs once after mount

  return (
    <section className='hero_section'>
        <video autoPlay muted loop className='hero_video' src="videos/Hero_video.mp4"></video>
        <div className="hero_wrapper">
            <h1 className='hero_title'>The Solar System</h1>
            <div className="hero_text">
                <p>At the center of our solar system is the Sun, a powerful star that gives light and energy to everything around it. </p>
                <svg ref={mouseRef} width="36" height="57" viewBox="0 0 36 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8125 10.6875C18.2849 10.6875 18.738 10.8752 19.072 11.2092C19.4061 11.5433 19.5938 11.9963 19.5938 12.4688V19.5938C19.5938 20.0662 19.4061 20.5192 19.072 20.8533C18.738 21.1873 18.2849 21.375 17.8125 21.375C17.3401 21.375 16.887 21.1873 16.553 20.8533C16.2189 20.5192 16.0312 20.0662 16.0312 19.5938V12.4688C16.0312 11.9963 16.2189 11.5433 16.553 11.2092C16.887 10.8752 17.3401 10.6875 17.8125 10.6875ZM32.0625 39.1875C32.0625 42.9668 30.5612 46.5914 27.8888 49.2638C25.2164 51.9362 21.5918 53.4375 17.8125 53.4375C14.0332 53.4375 10.4086 51.9362 7.73623 49.2638C5.06383 46.5914 3.5625 42.9668 3.5625 39.1875V17.8125C3.5625 14.0332 5.06383 10.4086 7.73623 7.73623C10.4086 5.06384 14.0332 3.5625 17.8125 3.5625C21.5918 3.5625 25.2164 5.06384 27.8888 7.73623C30.5612 10.4086 32.0625 14.0332 32.0625 17.8125V39.1875ZM17.8125 0C13.0883 0 8.55765 1.87667 5.21716 5.21716C1.87667 8.55765 0 13.0883 0 17.8125V39.1875C0 43.9117 1.87667 48.4423 5.21716 51.7828C8.55765 55.1233 13.0883 57 17.8125 57C22.5367 57 27.0673 55.1233 30.4078 51.7828C33.7483 48.4423 35.625 43.9117 35.625 39.1875V17.8125C35.625 13.0883 33.7483 8.55765 30.4078 5.21716C27.0673 1.87667 22.5367 0 17.8125 0Z" fill="white"/>
                </svg>
                <p>The Sun’s gravity holds all the planets in orbit, keeping the solar system together.</p>
            </div>
        </div>
    </section>
  )
}

export default Hero