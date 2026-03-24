import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"

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
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        }

    }, [])

    return (
        <div className="solar_video">
            <video
                muted
                playsInline
                preload="auto"
                ref={videoRef}
                src="videos/Solar_system.mp4"
            />
        </div>
    )
}

export default Solar_system