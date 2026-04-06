import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import Planet_info from "./Planet_info";

gsap.registerPlugin(ScrollTrigger);

const Solar_system = () => {
  const videoRef = useRef(null);
  const neptunVideoRef = useRef(null);

  const mercuryRef = useRef(null);
  const venusRef = useRef(null);
  const earthRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const saturnRef = useRef(null);
  const uranusRef = useRef(null);

  const planets = [
    mercuryRef,
    venusRef,
    earthRef,
    marsRef,
    jupiterRef,
    saturnRef,
    uranusRef,
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (!videoRef.current) return;
    const startValue = isMobile ? "top 50%" : "center 50%";
    const scrollLength = isMobile ? 2000 : 8000;

    planets.forEach((element) => {
      gsap.set(element.current, {
        opacity: 0,
        y: 50,
      });
    });

    let solarTl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: startValue,
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    function pauseShowPlayHide(pauseMoment, playMoment, planetRefrence) {
      const duration = videoRef.current.duration;
      return solarTl
        .to(videoRef.current, {
          currentTime: duration * pauseMoment,
          duration: 0.5,
        })
        .to(
          planetRefrence.current,
          {
            zIndex: 5,
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
          "<",
        )

        .to(videoRef.current, {
          currentTime: duration * playMoment,
          duration: 1,
        })
        .to(
          planetRefrence.current,
          {
            zIndex: 1,
            opacity: 0,
            y: 0,
            duration: 0.3,
          },
          "<",
        );
    }

    videoRef.current.onloadedmetadata = () => {
      const duration = videoRef.current.duration;

      solarTl.to(videoRef.current, {
        currentTime: duration * 0.125,
        duration: 1,
      });

      pauseShowPlayHide(0.125, 0.24, mercuryRef);
      pauseShowPlayHide(0.24, 0.36, venusRef);
      pauseShowPlayHide(0.36, 0.48, earthRef);
      pauseShowPlayHide(0.48, 0.6, marsRef);
      pauseShowPlayHide(0.6, 0.87, jupiterRef);
      pauseShowPlayHide(0.87, 0.97, saturnRef);
      pauseShowPlayHide(0.97, 1, uranusRef);
    };
  }, [isMobile]);

  return (
    <div className="solar_video">
      <video
        muted
        playsInline
        preload="auto"
        ref={videoRef}
        src="videos/Solar_system.mp4"
      />
      <Planet_info
        ref={mercuryRef}
        title={"Mercury"}
        number={1}
        description="Mercury is the smallest planet and the closest to the Sun, with a surface covered in craters like Earth’s Moon. It has almost no atmosphere, so temperatures change drastically between day and night."
      />
      <Planet_info
        ref={venusRef}
        title={"Venus"}
        number={2}
        description="Venus is similar in size to Earth but has a thick, toxic atmosphere that traps heat, making it the hottest planet. Its surface is covered with volcanoes and is hidden beneath dense clouds."
      />
      <Planet_info
        ref={earthRef}
        title={"Earf"}
        number={3}
        description="Earth is the only known planet that supports life, thanks to its liquid water and breathable atmosphere. It has a balanced climate and a protective magnetic field."
      />
      <Planet_info
        ref={marsRef}
        title={"Mars"}
        number={4}
        description="Mars is often called the “Red Planet” because of its rusty, iron-rich soil. It has the largest volcano and canyon in the solar system and may have once had liquid water."
      />
      <Planet_info
        ref={jupiterRef}
        title={"Jupiter"}
        number={5}
        description="Jupiter is the largest planet, known for its massive size and strong storms like the Great Red Spot. It is a gas giant made mostly of hydrogen and helium."
      />
      <Planet_info
        ref={saturnRef}
        title={"Saturn"}
        number={6}
        description="Saturn is famous for its beautiful rings made of ice and rock. It is a gas giant with many moons, including Titan, which has a thick atmosphere."
      />
      <Planet_info
        ref={uranusRef}
        title={"Uranus"}
        number={7}
        description="Uranus is an ice giant that rotates on its side, making its seasons very unusual. It has a pale blue color due to methane gas in its atmosphere."
      />
      <video
        muted
        playsInline
        preload="auto"
        ref={neptunVideoRef}
        src="videos/neptun.mp4"
      />
    </div>
  );
};

export default Solar_system;
