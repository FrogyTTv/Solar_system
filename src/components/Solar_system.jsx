import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import Planet_info from './Planet_info'

gsap.registerPlugin(ScrollTrigger)

const Solar_system = () => {

    const videoRef = useRef(null)

    const mercuryRef = useRef(null)
    const venusRef = useRef(null)
    const earthRef = useRef(null)
    const marsRef = useRef(null)
    const jupiterRef = useRef(null)
    const saturnRef = useRef(null)
    const uranusRef = useRef(null)

    const planets = [ mercuryRef, venusRef, earthRef, marsRef, jupiterRef, saturnRef, uranusRef]

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {

    if (!videoRef.current) return
        const startValue = isMobile ? 'top 50%' : 'center 50%'
        const scrollLength = isMobile ? 2000 : 8000;

        planets.forEach(element => {
            gsap.set(element.current, {
                opacity: 0,
                y: 50
            })
        });


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: startValue,
                end: `+=${scrollLength}`,
                scrub: true,
                pin: true,
                // markers: true,
            },
        })

        function pauseShowPlayHide(pauseMoment, playMoment, planetRefrence) {
            const duration = videoRef.current.duration

            return tl
                .to(videoRef.current, {
                    currentTime: duration * pauseMoment,
                    duration: 0.5
                })
                .to(planetRefrence.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                }, "<")

                .to(videoRef.current, {
                    currentTime: duration * playMoment,
                    duration: 1
                })
                .to(planetRefrence.current, {
                    opacity: 0,
                    y: 0,
                    duration: 0.3
                }, "<")
        }

        videoRef.current.onloadedmetadata = () => {
            const duration = videoRef.current.duration

            tl.to(videoRef.current, {
                currentTime: duration * 0.125,
                duration: 1
            })
            pauseShowPlayHide(0.125, 0.24, mercuryRef)
            pauseShowPlayHide(0.24, 0.36, venusRef)
            pauseShowPlayHide(0.36, 0.48, earthRef)
            pauseShowPlayHide(0.48, 0.6, marsRef)
            pauseShowPlayHide(0.6, 0.87, jupiterRef)
            pauseShowPlayHide(0.87, 0.97, saturnRef)
            pauseShowPlayHide(0.97, 1, uranusRef)
        }

    }, [isMobile])

    return (
        <div className="solar_video">
            <video
                muted
                playsInline
                preload="auto"
                ref={videoRef}
                src="videos/Solar_system.mp4"
            />
            <Planet_info ref={mercuryRef} title={'Mercury'} number={1} description='Here is the describtion. YOyoyoyoyo' />
            <Planet_info ref={venusRef} title={'Venus'} number={2} description='HALLLAAA' />
            <Planet_info ref={earthRef} title={'Earf'} number={3} description='HALLLAAA' />
            <Planet_info ref={marsRef} title={'Mars'} number={3} description='HALLLAAA' />
            <Planet_info ref={jupiterRef} title={'Jupiter'} number={3} description='HALLLAAA' />
            <Planet_info ref={saturnRef} title={'Saturn'} number={3} description='HALLLAAA' />
            <Planet_info ref={uranusRef} title={'Uranus'} number={3} description='HALLLAAA' />
        </div>
    )
}

export default Solar_system