import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import Planet_info from './Planet_info'

gsap.registerPlugin(ScrollTrigger)

const Solar_system = () => {

    const videoRef = useRef(null)

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {

    if (!videoRef.current) return
        const startValue = isMobile ? 'top 50%' : 'center 50%'
        const scrollLength = isMobile ? 2000 : 8000;

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

            // pause for scroll
            .to(videoRef.current, {
                currentTime: duration * 0.125,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.24,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.24,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.36,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.36,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.48,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.48,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.6,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.6,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.87,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.87,
                duration: 0.5
            })

            // play again
            .to(videoRef.current, {
                currentTime: duration * 0.97,
                duration: 1
            })

            // another pause
            .to(videoRef.current, {
                currentTime: duration * 0.97,
                duration: 0.5
            })

            // finish video
            .to(videoRef.current, {
                currentTime: duration,
                duration: 1
            })
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
            <Planet_info title={'Mercury'} number={1} describtion='Here is the describtion. YOyoyoyoyo' />
        </div>
    )
}

export default Solar_system