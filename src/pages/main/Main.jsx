import "./Main.css"

import gsap, { Power3 } from 'gsap';
import React, { useRef,useEffect, use, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import qweqweqwe from "../../assets/img/qweqweqwe.png"
import image1 from "../../assets/img/bg13.png"
import image2 from "../../assets/img/icon_durability__evkg7cnj10a6_large.png"
import image3 from "../../assets/img/icon_chip__baf6q8pri9cy_large.png"
import image4 from "../../assets/img/icon_battery__ir0j8i6fc0uq_large.png"
import image5 from "../../assets/img/wheel.png"
import image6 from "../../assets/img/icon_cinematic_mode__fefdkhc2s8i2_large.jpg"
import image9 from "../../assets/img/byd-side-view-2.png"
import car_inside from "../../assets/img/car_inside.jpg" 
import bg1 from "../../assets/img/bg1.png"
import bg2 from "../../assets/img/bg2.png"
import bg3 from "../../assets/img/bg3.png"
import bg4 from "../../assets/img/bg4.png"
import bg5 from "../../assets/img/bg5.png"
import bg6 from "../../assets/img/bg6.png"
import bg7 from "../../assets/img/bg7.png"
import bg8 from "../../assets/img/bg8.png"
import bg9 from "../../assets/img/bg9.png"
import bg10 from "../../assets/img/bg10.png"
import bg11 from "../../assets/img/bg11.png"
import bg12 from "../../assets/img/bg12.png"
import phonecar from "../../assets/img/phonecar.png"
import phoneditor from "../../assets/img/phoneditor.png"
import vid9 from "../../assets/img/2.3.mp4";
import vid91 from "../../assets/img/2.3.1.mp4";
import vid10 from "../../assets/img/5555.mp4";

// import image9 from "../../assets/img/men_and_women2.jpg"

import red_car from "../../assets/img/red_car.png"
import blue_car from "../../assets/img/blue_car.png"
import silver_car from "../../assets/img/silver_car.png"
import black_car from "../../assets/img/black_car.png"
import ScrollMagic from "scrollmagic";

function Main() {
    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)
    const item6 = useRef(null)
    const item7 = useRef(null)
    const item8 = useRef(null)
    const item9 = useRef(null)
    const item10 = useRef(null)
    const item11 = useRef(null)
    const item12 = useRef(null)
    const item13 = useRef(null)
    const item14 = useRef(null)
    const item15 = useRef(null)
    const item16 = useRef(null)
    const item17 = useRef(null)
    const item18 = useRef(null)
    const item19 = useRef(null)
    const item20 = useRef(null)
    const item21 = useRef(null)
    const item22 = useRef(null)
    const item23 = useRef(null) 
    const item24 = useRef(null) 
    const item25 = useRef(null) 
    const item26 = useRef(null) 
    const item27 = useRef(null) 
    const item28 = useRef(null) 
    const item29 = useRef(null) 
    const item30 = useRef(null) 
    const item31 = useRef(null) 
    const item32 = useRef(null) 
    
    const cinematic__video = useRef(null)
    const row__columnpg = useRef(null)
    const columnp__1 = useRef(null)
    const columnp__2 = useRef(null)
    const cinematicMode__framegroup__flex = useRef(null)
    const video__editor = useRef(null)
    const video__border = useRef(null)
    const black__rounded = useRef(null)
    const pg__left = useRef(null)
    const pg__right = useRef(null)
    const framegroup3__content__lower = useRef(null)
    
    // Color Options //
    
    const blue = useRef(null) //blueOption  --
    const black = useRef(null) //blackOption --
    const red = useRef(null) //redOption --
    const silver = useRef(null) //silverOption --
    const first = useRef(null); //first --
    const firstSpan = useRef(null); //firstSpan --
    const firstColor = useRef(null); //firstColor --
    const second = useRef(null); //second --
    const secondSpan = useRef(null); //secondSpan --
    const third = useRef(null); //third --
    const thirdimg1 = useRef(null); //thirdimg1 --
    const thirdimg2 = useRef(null); //thirdimg2 --
    const thirdSpan = useRef(null); //thirdSpan --
    const thirdSpan2 = useRef(null); //thirdSpan2 --
    const fourth = useRef(null); //fourth --
    const fourthSpan = useRef(null); //fourthSpan --
    const fifth = useRef(null); //fifth
    const deleteVideo = useRef(null)
    const videoImg = useRef(null)

    const videoplayer = useRef(null)
    const videobutton = useRef(null)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const vidElement = useRef(null)
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handle = () => {
        if (videoplayer.current.paused) {
            videoplayer.current.play();
            videobutton.current.innerText = "Pause"
        } else {
            videoplayer.current.pause();
            videobutton.current.innerText = "Play"
        }
        videoplayer.current.autoplay = true;
    }

    function clicked(){
            videobutton.current.addEventListener("click", handle);
            videoplayer.current.removeEventListener("click", handle);
    }

    useEffect(() => {
        deleteVideo.current.onended = function(){
            deleteVideo.current.style.opacity = 0            
            setTimeout(() => {
                deleteVideo.current.remove()
            }, 2000);
            videoImg.current.style = "opacity: 1; object-fit : cover";
        }
    })

    const blueSelected = () => {
        blue.current.classList.add("selected");
        black.current.classList.remove("selected");
        red.current.classList.remove("selected");
        silver.current.classList.remove("selected");
        
        first.current.style.backgroundColor = "#0c3139";
        first.current.style.backgroundImage = `url(${blue_car})`
        first.current.style.backgroundPosition = "bottom";
        first.current.style.backgroundRepeat = "no-repeat";
        firstSpan.current.style.color = "#b6ff9b";
        firstColor.current.innerText = "Blue";
        
        second.current.style.backgroundColor = "#0c3139";
        secondSpan.current.style.color = "#b6ff9b";
        
        third.current.style.backgroundColor = "#0c3139";
        thirdSpan.current.style.color = "#b6ff9b"
        
        fourth.current.style.backgroundColor = "#0c3139";
        fourthSpan.current.style.color = "#b6ff9b";
        
        fifth.current.style.backgroundColor = "#0c3139";
        fifth.current.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_blue__c0j14e4usxsi_large.jpg')"
    }
    const blackSelected = () => {
        blue.current.classList.remove("selected");
        red.current.classList.remove("selected");
        black.current.classList.add("selected");
        silver.current.classList.remove("selected");
        
        first.current.style.backgroundColor = "#12203b";
        first.current.style.backgroundImage = `url(${black_car})`
        first.current.style.backgroundPosition = "bottom";
        first.current.style.backgroundRepeat = "no-repeat";
        firstSpan.current.style.color = "#ffa9ab";
        firstColor.current.innerText = "Midnight";
        
        second.current.style.backgroundColor = "#12203b";
        secondSpan.current.style.color = "#ffa9ab";
        
        third.current.style.backgroundColor = "#12203b";
        thirdSpan.current.style.color = "#ffa9ab";
        
        fourth.current.style.backgroundColor = "#12203b";
        fourthSpan.current.style.color = "#ffa9ab";
        
        fifth.current.style.backgroundColor = "#12203b";
        fifth.current.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_midnight__cz38pgnhst26_large.jpg')"
    }
    const redSelected = () => {
        blue.current.classList.remove("selected");
        black.current.classList.remove("selected");
        silver.current.classList.remove("selected");
        red.current.classList.add("selected");
        
        first.current.style.backgroundColor = "#3e1921";
        first.current.style.backgroundImage = `url(${red_car})`
        first.current.style.backgroundPosition = "bottom";
        first.current.style.backgroundRepeat = "no-repeat";
        firstSpan.current.style.color = "#ffb44c";
        firstColor.current.innerText = "Red";
        
        second.current.style.backgroundColor = "#3e1921";
        secondSpan.current.style.color = "#ffb44c";
        
        third.current.style.backgroundColor = "#3e1921";
        thirdSpan.current.style.color = "#ffb44c";
        
        fourth.current.style.backgroundColor = "#3e1921";
        fourthSpan.current.style.color = "#ffb44c";
        
        fifth.current.style.backgroundColor = "#3e1921";
        fifth.current.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_red__be2yibg6u4ky_large.jpg')"
    }
    const silverSelected = () => {
        blue.current.classList.remove("selected");
        black.current.classList.remove("selected");
        red.current.classList.remove("selected");
        silver.current.classList.add("selected");
        
        first.current.style.backgroundColor = "#2e2e3a";
        first.current.style.backgroundImage = `url(${silver_car})`
        first.current.style.backgroundPosition = "bottom";
        first.current.style.backgroundRepeat = "no-repeat";
        firstSpan.current.style.color = "#72e5ce";
        firstColor.current.innerText = "Silver";
        
        second.current.style.backgroundColor = "#2e2e3a";
        secondSpan.current.style.color = "#72e5ce";
        
        third.current.style.backgroundColor = "#2e2e3a";
        thirdSpan.current.style.color = "#72e5ce";
        
        fourth.current.style.backgroundColor = "#2e2e3a";
        fourthSpan.current.style.color = "#72e5ce";
        
        fifth.current.style.backgroundColor = "#2e2e3a";
        fifth.current.style.backgroundImage = "url('https://www.apple.com/v/iphone-13/c/images/overview/design/water_resistant_starlight__cb8pejfi5bma_large.jpg')"
    }
    gsap.registerPlugin(Power3, ScrollTrigger);

    useGSAP(() => {
        ScrollMagicPluginGsap(ScrollMagic, gsap);
        
        if (!cinematicMode__framegroup__flex.current) return;
    
        const controller = new ScrollMagic.Controller();
        
        gsap.set(video__editor.current, { scale: 0.8, opacity: 0 });
        gsap.set(video__border.current, { scale: 0.8, opacity: 0 });
        gsap.set(black__rounded.current, { scale: 0.8, opacity: 0 });
        gsap.set(cinematic__video.current, { scale: 1 });
        gsap.set([pg__left.current, pg__right.current], { opacity: 0, y: -200 });
        gsap.set(framegroup3__content__lower.current, { opacity: 0, y: -350 });
        
        const timeline10 = gsap.timeline({
          smoothChildTiming: true,
          defaults: { ease: "power2.inOut" }
        });
        
        timeline10
          .to('#columnp-1', {
            duration: 4,
            y: -10,
            opacity: 0,
          }, "6") // Starting at 6 seconds
          
          .fromTo('#columnp-2',
            {
              y: -250,
              opacity: 0
            },
            {
              duration: 4,
              y: -360,
              opacity: 1
            }
          )
          
          .to('#columnp-2', {
            duration: 5,
            y: -370,
            opacity: 0
          }, ">8") // 8 seconds after previous
          
          .to('#row--columnpg', {
            duration: 5,
            y: -10,
            opacity: 0
          }, "<") // Start at same time as previous
          
          .fromTo("#video-border",
            {
                scale:3,
                duration:8
            },{
                duration: 8,
                scale: 1,
                opacity: 1
          }, "<+1") // 1 second after previous start
          
          .to("#cinematic-video", {
            duration: 8,
            opacity: 0,
            scale: .5,
            y: -10
          }, ">-8") // 4 seconds before next
          
        //   .to("#video-editor", {
        //     duration: 8,
        //     opacity: 1
        //   }, "<") // Start at same time as previous
          
          .to("#pg-left", {
            duration: 5,
            opacity: 1,
            y: -260
          }, "<-2") // 2 seconds before previous start
          
          .to("#pg-right", {
            duration: 5,
            opacity: 1,
            y: -260
          }, "<") // Start at same time as previous
          
          .to("#pg-left", {
            duration: 5,
            opacity: 0,
            y: -310
          }, ">+7") // 7 seconds after previous
          
          .to("#pg-right", {
            duration: 5,
            opacity: 0,
            y: -310
          }, "<") // Start at same time as previous
          
          .fromTo(".framegroup3-content-lower",
            {
              opacity: 0,
              y: -350
            },
            {
              duration: 5,
              opacity: 1,
              y: -380
            },
            ">" // Start after previous
          )    
        // Create ScrollMagic Scene
        const scene_cinematic1 = new ScrollMagic.Scene({
          triggerElement: cinematicMode__framegroup__flex.current,
          triggerHook: 0.1,
          duration: "200%"
        })
          .setPin(cinematicMode__framegroup__flex.current, {
            pushFollowers: false
          })
          .setTween(timeline10)
          .addTo(controller);
    
        // Cleanup
        return () => {
          scene_cinematic1.destroy(true);
          controller.destroy(true);
          timeline10.kill();
        };
      }, {dependencies:[]});
  
    useGSAP(() => {
        const wheel = gsap.timeline({repeat: -1});
        wheel.to(item6.current, { duration: 7, rotate: 360, ease: 'none' })
        
        // yazinin yapisib yox olmagi
        gsap.to(item21.current, {
            opacity: 0,
            ease:"power3.in",
            scrollTrigger:{
                pin: true,
                toggleActions: "play reverse play reverse",
                trigger:item21.current,
                scrub: true, // scrolla deyismesi
                start:"top top",
                end:"70% top",
                // markers:true
            }
        })
        gsap.to(item31.current, {
            ease:"power3.in",
            scrollTrigger:{
                pin: true,
                toggleActions: "play reverse play reverse",
                trigger:item32.current,
                scrub: true, // scrolla deyismesi
                start:"top -150px",
                end:"bottom center",
                // markers:true
            }
        })
        
        // telefondaki sekiller 
        gsap.to(item17.current, {
            scale: .4,
            ease:"power3.out",
            scrollTrigger: {
                trigger:item18.current,
                scrub: true, // scrolla deyismesi
                start:"top 70%",
                end:"bottom 30%",
                toggleActions: "play reverse play reverse",
                // markers: true,
            }
        })
        gsap.to(item19.current, {
            scale: .9,
            zIndex: 4,
            opacity: 1,
            ease:"power3.out",
            scrollTrigger: {
                trigger:item18.current,
                scrub: true, // scrolla deyismesi
                start:"top 70%",
                end:"bottom 30%",
                toggleActions: "play reverse play reverse",
                // markers: true,
            }
        })
        
        //hemin hissede gizlenmeleri
        gsap.to(item22.current, {
            opacity: 0,
            // ease:"power3.out",
            scrollTrigger: {
                trigger:item22.current,
                scrub: true, // scrolla deyismesi
                start:"top 60%",
                end:"bottom 50%",
                // toggleActions: "play reverse play reverse",
                // markers: true
            }
        })
        // hemin hissede gorsenmeleri
        let list = [fifth, first,second,third,fourth,item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item23,item24,item25,item26,item27,item28,item29,item30]
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            gsap.to(element.current, {
                opacity: 1,
                // y:-30,
                ease:"power3.out",
                scrollTrigger: {
                    trigger:element.current,
                    scrub: true, // scrolla deyismesi
                    start:"top 75%",
                    end:"bottom 25%",
                    toggleActions: "play reverse play reverse",
                    // markers: true,
                }
            })
        }
    }, {dependencies:[]})

    return (
        <div className='main-page'>
            <header className="header">
                <nav className="header__navigation">
                </nav>
            </header>    
            
            <div className="upper-information" id="upper-info1">
                <p>
                    Save on your new iPhone with special carrier deals at Apple.
                    <span id="info-span" style={{color: "#06c"}}>
                        Find your deal
                        <i style={{fontSize: "0.8rem", color: "rgba(0, 102, 204, 0.719)", marginLeft: "4px"}} className="fas fa-chevron-right"/>
                    </span>
                </p>
            </div>
    
            
            <section className="section__intro">
                <div className="section__intro-video">
                    <video ref={deleteVideo} id="intro-video" autoPlay muted>
                        <source ref={vidElement} src={(screenWidth > 768 ? vid9 : vid91)} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <img ref={videoImg} src={image1} id="section__intro-poster"/>
                </div>
                <div className="fullscreen-black"></div>
            </section>
    
            
            <section className="section__color-representation">
                <div className="color-representation-wrapper">
                    <div className="color-representation-content">
                    <div ref={item1} className="color-representation-content--1 features">
                        <div className="icon-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 212 212"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                            <clipPath id="__lottie_element_5">
                                <rect width="212" height="212" x="0" y="0"></rect>
                            </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_5)">
                            <g
                                transform="matrix(1.9199999570846558,0,0,1.9199999570846558,106,107.06199645996094)"
                                opacity="1"
                                style={{display: "block"}}
                            >
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(255,168,171)"
                                    strokeOpacity="1"
                                    strokeWidth="5"
                                    d=" M0,-15.125 C8.071537971496582,-15.125 14.625,-8.571537971496582 14.625,-0.5 C14.625,7.571537494659424 8.071537971496582,14.125 0,14.125 C-8.071537971496582,14.125 -14.625,7.571537494659424 -14.625,-0.5 C-14.625,-8.571537971496582 -8.071537971496582,-15.125 0,-15.125z"
                                ></path>
                                </g>
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(255,168,171)"
                                    strokeOpacity="1"
                                    strokeWidth="5"
                                    d=" M0,-15.125 C8.071537971496582,-15.125 14.625,-8.571537971496582 14.625,-0.5 C14.625,7.571537494659424 8.071537971496582,14.125 0,14.125 C-8.071537971496582,14.125 -14.625,7.571537494659424 -14.625,-0.5 C-14.625,-8.571537971496582 -8.071537971496582,-15.125 0,-15.125z"
                                ></path>
                                </g>
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(255,168,171)"
                                    strokeOpacity="1"
                                    strokeWidth="5"
                                    d=" M22,-13.5 C22.827850341796875,-13.5 23.5,-12.827850341796875 23.5,-12 C23.5,-11.172149658203125 22.827850341796875,-10.5 22,-10.5 C21.172149658203125,-10.5 20.5,-11.172149658203125 20.5,-12 C20.5,-12.827850341796875 21.172149658203125,-13.5 22,-13.5z"
                                ></path>
                                <path
                                    fill="rgb(255,168,171)"
                                    fillOpacity="1"
                                    d=" M22,-13.5 C22.827850341796875,-13.5 23.5,-12.827850341796875 23.5,-12 C23.5,-11.172149658203125 22.827850341796875,-10.5 22,-10.5 C21.172149658203125,-10.5 20.5,-11.172149658203125 20.5,-12 C20.5,-12.827850341796875 21.172149658203125,-13.5 22,-13.5z"
                                ></path>
                                </g>
                                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="miter"
                                    fillOpacity="0"
                                    strokeMiterlimit="4"
                                    stroke="rgb(255,168,171)"
                                    strokeOpacity="1"
                                    strokeWidth="5"
                                    d=" M-4.078000068664551,23.5 C-17.601999282836914,23.5 -30,23.5 -30,23.5 C-33.31399917602539,23.5 -36,20.81399917602539 -36,17.5 C-36,17.5 -36,-17.5 -36,-17.5 C-36,-20.81399917602539 -33.31399917602539,-23.5 -30,-23.5 C-30,-23.5 -23.062000274658203,-23.5 -18.375,-23.5 C-17.48200035095215,-23.5 -15.737000465393066,-24.163000106811523 -15.072999954223633,-24.760000228881836 C-13.395000457763672,-26.267000198364258 -12.163999557495117,-28.226999282836914 -10.491000175476074,-29.739999771118164 C-9.883999824523926,-30.288999557495117 -8.194000244140625,-30.875 -7.375,-30.875 C-2.312999963760376,-30.875 0.8119999766349792,-30.875 6.375,-30.875 C7.175000190734863,-30.875 8.817000389099121,-30.256000518798828 9.428999900817871,-29.740999221801758 C11.255000114440918,-28.20400047302246 12.71399974822998,-26.257999420166016 14.574000358581543,-24.761999130249023 C15.32800006866455,-24.1560001373291 17.156999588012695,-23.5 18.125,-23.5 C22.812000274658203,-23.5 30,-23.5 30,-23.5 C33.31399917602539,-23.5 36,-20.81399917602539 36,-17.5 C36,-17.5 36,-17.5 36,-17.5 C36,-17.5 36,17.5 36,17.5 C36,20.81399917602539 33.31399917602539,23.5 30,23.5 C30,23.5 15.138999938964844,23.5 0.20900000631809235,23.5"
                                ></path>
                                </g>
                            </g>
                            </g>
                        </svg>
                        </div>
                        <p>Our most advanced dual‑camera system ever.</p>
                    </div>
                    <div ref={item2} className="color-representation-content--2 features">
                        <div className="icon-wrapper">
                        <img src={image2} />
                        </div>
                        <p>Durability that’s front and center. And edge to edge.</p>
                    </div>
                    <div ref={item3} className="color-representation-content--3 features">
                        <div className="icon-wrapper">
                        <img src={image3} />
                        </div>
                        <p>A lightning-fast chip that leaves the competition behind.</p>
                    </div>
                    <div ref={item4} className="color-representation-content--4 features">
                        <div className="icon-wrapper">
                        <img src={image4} />
                        </div>
                        <p>A huge leap in battery life you’ll notice every day.</p>
                    </div>
                    </div>
                </div>
                <div className="color-representation-lower">
                    <div className="color-representation-lower-media"></div>
                    <div ref={item5} className="color-representation-lower-content">
                    <div className="lower-content-headline">
                        <h1 id="headline1">iPhone 13</h1>
                        <h2 id="headline2">Your new superpower.</h2>
                    </div>
                    <div className="lower-content-paragraph">
                        <p>From $29.12/mo. for 24 mo. or $699 before trade-in</p>
                        <ul>
                        <li>Watch the film</li>
                        <li>Watch the event</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
    
            
            <section className="section__spec-information">
            <div className="specFirstColumn">
                <div className="colorOption">
                    <div
                        className="blueOption"
                        id="blueOption"
                        ref={blue}
                        onClick={() => blueSelected()}
                    ></div>
                    <div
                        className="blackOption"
                        id="blackOption"
                        ref={black}
                        onClick={() => blackSelected()}
                    ></div>
                    <div
                        className="silverOption"
                        id="silverOption"
                        ref={silver}
                        onClick={() => silverSelected()}
                    ></div>
                    <div 
                        className="redOption"  
                        id="redOption" 
                        ref={red}
                        onClick={() => redSelected()}
                    ></div>
                </div>
    
                <div ref={first} className="newPinkFinish" id="first">
                <h4>
                    <span ref={firstSpan} id="firstSpan">New</span> <br />
                    <span ref={firstColor} id="firstColor">Black</span> <br />
                    finish
                </h4>
                </div>
    
                <div ref={second} className="ceramicShield" id="second">
                <img
                    src="https://www.apple.com/v/iphone-13/c/images/overview/design/icon_ceramic_shield__djb87ha8lqc2_large.png"
                    alt=""
                />
                <h4>
                    Ceramic Shield, <br />
                    <span ref={secondSpan} id="secondSpan">tougher</span> than any <br />
                    smartphone glass
                </h4>
                </div>
            </div>
    
            <div className="specSecondColumn">
                <div className="specScreen">
                    <div ref={third} className="specSizes" id="third">
                        <div className="specSizesTogether">
                            <div className="specSizes13">
                                <h3>BYD</h3>
                                <div className="specSizes13Img">
                                    <img
                                    ref={thirdimg1}
                                    id="thirdimg1"
                                    src={qweqweqwe}
                                    alt=""
                                    />
                                </div>
                                <strong ref={thirdSpan} id="thirdSpan" className="specScreen"
                                    >1.3 Dizel
                                </strong>
                            </div>
                        </div>
            
                        <h3 className="specSuper">Super Retina XDR display<sup>2</sup></h3>
                    </div>
                    <div ref={fifth} className="specWater" id="fifth"></div>
                </div>
    
                <div className="specDurable" ref={fourth} id="fourth">
                    <h3>
                        <span ref={fourthSpan} id="fourthSpan">Durable</span> <br />
                        flat-edge <br />
                        design
                    </h3>
                </div>
            </div>
    
            </section>
    
            
            <section ref={item20} className="section__huge-camera">
            <h3 ref={item21} id="howdidwe">
                How did we get such a <span>huge camera upgrade</span> to fit?
            </h3>
            <img
                id="howdidImage"
                src={image5}
                ref={item6}
                alt=""
            />
            <p ref={item22} id="thinking">By thinking diagonally</p>
            </section>
    
            <section className="section__cinematicMode">
            <header className="cinematicMode__header">
                <h1 className="cinematicMode__header-text">
                <span style={{color: "#ffb34e"}}>iPhone went to film school,</span> so you
                don’t have to.
                </h1>
                <div className="cinematicMode__header-lowertext">
                <div className="cinematicMode__header-lowertext-flex">
                    <h3>Presenting Cinematic mode</h3>
                    <img
                    src={image6}
                    />
                </div>
    
                <p>
                    Filmmakers use a technique called rack focus — shifting focus from
                    one subject to another — to guide the audience’s attention in their
                    movies. Now iPhone makes it easy for you to bring the same
                    storytelling technique to your videos.
                </p>
                </div>
            </header>
            <div className="cinematicMode__framegroup-container">
      <div ref={cinematicMode__framegroup__flex} className="cinematicMode__framegroup-flex">
        <div className="framegroup-flex-figure">
          {/* <div ref={black__rounded} className="black-rounded"></div> */}
          {/* <img id="video-editor" ref={video__editor} src={image7} alt="Video editor" /> */}
          <img ref={cinematic__video} id="cinematic-video" src={car_inside} alt="" />
          <img
            ref={video__border}
            id="video-border"
            src={image9}
            alt="Video border"
          />
        </div>
        <div className="framegroup-flex-content-row">
          <p id="row--columnpg" ref={row__columnpg}>
            Cinematic mode automatically creates beautiful depth effects and
            focus transitions
          </p>
          <div className="content-row--column-paragraph">
            <p id="columnp-1" ref={columnp__1}>
              Just start recording and Cinematic mode will hold focus on your
              subject while creating a beautiful depth-of-field effect all
              around them.
            </p>
            <p id="columnp-2" ref={columnp__2}>
              Cinematic mode can also anticipate when a prominent new subject
              is about to enter the scene and automatically shift focus when
              they do. Now you can effortlessly create videos that look and
              feel like the movies.
            </p>
          </div>
        </div>
        <div className="cinematicMode__framegroup-3">
          <div className="framegroup3-content-row">
            <p id="pg-left" ref={pg__left}>
              You can even adjust the depth effect after you shoot
            </p>
            <p id="pg-right" ref={pg__right}>
              Want to change the focus or adjust the blur after shooting wraps?
              No problem. iPhone lets you do it with a few taps and swipes. Even
              pro movie cameras can't do that.
            </p>
          </div>
          <div ref={framegroup3__content__lower} className="framegroup3-content-lower">
            <h4>
              Cinematic mode shoots<br />
              <strong>
                Dolby Vision HDR
              </strong>
            </h4>
          </div>
        </div>
      </div>
    </div>
            </section>
    
        <section className="section-cameragallery">
            <div ref={item7} className="firstCmrg">
            <h2 id="firstCmrg">Take <span>a great <br/> photo</span> without <br/> lifting a finger.</h2>
            <p id="ok">OK, one finger</p>
            <img src="https://www.apple.com/v/iphone-13/c/images/overview/cameragallery/icon_hand__czuavz3piumq_large.jpg"
                alt=""/>
            </div>
    
            <div  ref={item8} className="secondCmrg" id="secondCmrg">
            <img src={bg1}
                alt=""/>
            </div>
    
            <div className="thirdCmrg">
    
            <div ref={item9} className="thirdCmrgImage" id="thirdCmrgImage">
                <img
                src={bg2}
                alt=""/>
            </div>
    
    
            <div ref={item10} className="thirdCmrgText" id="thirdCmrgText">
                <span>Night mode</span> senses low-light scenes and <br/> automatically adjusts to take bright, clear photos <br/>
                with
                amazingly rich
                colors.
            </div>
    
            </div>
    
            <div ref={item11} className="fourthCmrg" id="fourthCmrg">
            <img src={bg3}
                alt=""/>
            </div>
    
            <div className="fifthCmrg">
    
            <div  ref={item12} className="fifthCmrgLeft" id="fifthCmrgLeft">
                <img
                src={bg4}
                alt=""/>
                <p><span>Portrait mode</span> artfully blurs the background to <br/> put the focus on your subject. You can try
                out six <br/>
                creative
                lighting effects with a swipe.</p>
            </div>
    
            <div  ref={item13} className="fifthCmrgRight" id="fifthCmrgRight">
                <img
                src={bg5}
                alt=""/>
            </div>
    
            </div>
    
            <div ref={item14} className="sixthCmrg">
            <img id="sixthCmrg"
                src={bg6}
                alt=""/>
            <p><span>Smart HDR 4 </span> now recognizes up to four different <br/> people in a scene and optimizes contrast,
                <br/> lighting,
                and
                even
                skin tones for each one. <br/> So everybody looks their best.
            </p>
            </div>
    
            <div ref={item15} className="seventhCmrg" id="seventhCmrg">
            <img src={bg7}
                alt=""/>
            </div>
    
            <div className="eighthCmrg">
            <p><span>Deep Fusion</span> activates in mid- to low-light <br/> scenes. It analyzes multiple exposures pixel by
                <br/> pixel to
                capture the
                subtlest textures, patterns, <br/> and details.
            </p>
            </div>
    
            <div ref={item16} className="ninethCmrg" id="ninethCmrg">
            <img
                src={bg8}
                alt=""/>
            </div>
    
            <div className="tenCmrg">
            <p><span>The Ultra Wide camera</span> gives you a wide field of <br/> view even when you’re right up close to what
                <br/>
                you’re shooting.
                So you can capture more of the <br/> scene without stepping back.
            </p>
            </div>
    
            <div ref={item17} className="testFinal" id="testFinal" style={{height: "100vh"}}>
            <div ref={item18} className="finalCmrg" id="finalCmrg">
                <img id="final1"
                src={phonecar}
                alt=""/>
            </div>
            <div className="finalCmrg2" id="finalCmrg2">
                <img id="final2"
                src="https://www.apple.com/v/iphone-13/c/images/overview/cameragallery/memories_hw__fw2wmfjzy7mi_large.png"
                alt=""/>
            </div>
            <div className="finalCmrg3" id="finalCmrg3">
                <img ref={item19} id="final3"
                src={phoneditor}
                alt=""/>
            </div>
            </div>
    
            <div className="endCmrg">
            <p id="endCmrg"><span>Memories</span> are automatic slideshows created <br/> from meaningful moments in your photo
                library. <br/>
                Personalize
                them
                with
                your own look and feel — <br/> or even a soundtrack from your music library.</p>
            </div>
    
    
    
        </section>
    
        <section className="section-aCamera">
            <div className="firstaCamera">
            <h2 ref={item24} id="aCamera">A camera with a style <span>all your own.</span></h2>
            <div id="introCamera">
                <p>Introducing Photographic Styles</p>
                <img
                src="https://www.apple.com/v/iphone-13/c/images/overview/photographic-styles/icon_photographic_styles__eg235xf65r42_large.jpg"
                alt=""/>
            </div>
            </div>
    
            <div className="secondaCamera">
    
            <div className="seconda1">
                <p ref={item23} id="styles1"><span>Styles are smart</span> <br/> enough to do things <br/> like boost or mute <br/> colors while
                keeping <br/>
                skin tones
                natural</p>
    
                <p ref={item25} id="photoaCamera">Photographic Styles <br/> create a personal look for <br/> your photos. But unlike <br/>
                filters, styles
                selectively <br/> apply
                adjustments to the <br/> right areas, while <br/> preserving skin tones.</p>
            </div>
    
            <div className="seconda2">
                <video id="video"
                src={vid10}
                ref={videoplayer}
                autoPlay muted loop></video>
                <p ref={videobutton} onClick={clicked} id="videoBtn">Pause</p>
            </div>
    
            <div className="seconda3">
                <p ref={item26} id="seconda3">Choose Vibrant to make <br/> photos bright and vivid. <br/> Rich Contrast for darker <br/> shadows
                and deeper
                colors. <br/>
                Warm
                or
                Cool to accentuate <br/> golden or blue undertones. <br/> Preset, ready, go!</p>
            </div>
    
            </div>
    
            <div className="thirdaCamera">
            <img ref={item27} id="thirdaCameraImg"
                src={bg9}
                alt=""/>
            </div>
    
            <div className="fourthaCamera">
    
            <div className="fourtha1">
                <img ref={item28} id="fourtha1img"
                src={bg10}
                alt=""/>
            </div>
    
    
            <div ref={item29} className="fourtha2">
                <img id="fourtha2"
                src={bg11}
                alt=""/>
            </div>
    
            <div className="fourtha3">
                <p ref={item30} id="fourtha3img">Just choose a style <br/>
                once — like <br/>
                Vibrant, shown <br/> here — and your <br/> photos will <br/> <span>automatically have <br/> that look</span></p>
            </div>
    
            </div>
        </section>
    
        <section className="section-frame">
    
            <div className="frameContainer">
    
            <div className="frameText">
                <h4>
                The <span>TrueDepth camera system</span>
                <br/> has all the latest features from <br/> the back cameras:
                </h4>
                <ul>
                <li>Cinematic mode</li>
                <li>Photographic Styles</li>
                <li>Dolby Vision HDR recording</li>
                <li>Portrait Mode</li>
                <li>Night Mode Selfies</li>
                <li>Smart HDR 4</li>
                <li>Deep Fusion</li>
                <li>and more</li>
                </ul>
            </div>
    
    
            <div className="frameImg">
                <img
                src={bg12}
                alt=""/>
            </div>
    
            </div>
    
        </section>
    
        </div>
      )
}

export default Main