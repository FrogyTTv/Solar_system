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

        videoRef.current.onloadedmetadata = () => {

            const duration = videoRef.current.duration

            tl

            // play first part
            .to(videoRef.current, {
                currentTime: duration * 0.125,
                duration: 1
            })

            // pause for scroll + show mercury
            .to(videoRef.current, {
                currentTime: duration * 0.125,
                duration: 0.5
            })
            .to(mercuryRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.24,
                duration: 1
            })

            .to(mercuryRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time
            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.24,
                duration: 0.5
            })
            .to(venusRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.36,
                duration: 1
            })
            .to(venusRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.36,
                duration: 0.5
            })
            .to(earthRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.48,
                duration: 1
            })
            .to(earthRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.48,
                duration: 0.5
            })
            .to(marsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.6,
                duration: 1
            })
            .to(marsRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.6,
                duration: 0.5
            })
            .to(jupiterRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.87,
                duration: 1
            })
            .to(jupiterRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.87,
                duration: 0.5
            })
            .to(saturnRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.97,
                duration: 1
            })
            .to(saturnRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.97,
                duration: 0.5
            })
            .to(uranusRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
            }, "<") // start at same time

            // finish video
            .to(videoRef.current, {
                currentTime: duration,
                duration: 1
            })
            .to(uranusRef.current, {
                opacity: 0,
                y: 0,
                duration: 0.3
            }, "<") // start at same time
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