import { useRef, useState, useEffect } from "react"

import "./conf.css"

import Navi from "./components/navi"

const App = () => {
  // client listener
  const [userListen, setUserListen] = useState('')
  const sectionRefs = useRef({})

  // function of tagging 
  const href = () => {  
    switch (userListen) {
      case 'Home' :
        return 'About'
      case 'About' :
        return 'Social'
      case 'Social' : 
        return 'Home'}}

  useEffect (() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setUserListen(entry.target.id)
        }})}; const observer = new IntersectionObserver (handleIntersection, {
      root: null,
      threshold: 0.5
    }); Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    }); return () => observer.disconnect()
  }, [])



  return (
    <>
    <div className="HOME">
    {/* NAVIGATION BAR */}
    <Navi location={userListen} hrefRef={href}>

    </Navi>
    {/* Main Content */}
      <div className="w-full h-screen relative overflow-hidden" id='Home' ref={(e) => (sectionRefs.current['home'] = e)} >
      <img src="/profil/assets/bg/items/clapperboard.png" alt="clapperboard" 
        width={300} className="
          blur-sm
          absolute
          left-3/4
          rotate-45
          hidden
          lg:flex
        "/>
      <img src="/profil/assets/bg/items/camera.png" alt="clapperboard" 
        width={300} className="
          blur-sm
          absolute
          top-1/2
          -rotate-45  
          transform scale-x-[-1]  
          hidden
          lg:flex
        "/>
      <img src="/profil/assets/bg/items/laptop.png" alt="clapperboard" 
        width={300} className="
        blur-sm
        absolute
        left-[75%]
        top-[60%]
        rotate-[20deg]
        hidden 
        lg:flex
      "/>
        <div style={{
          
        }} className="bg-cover bg-center bg-fixed ">
          <div className="bg-cover bg-center h-screen w-full
          justify-center items-center flex bg-main-custom
        ">
          {/* TITLE */}
            <div className="title text-white text-center flex justify-center flex-col">
            <h1 className="font-bold hidden m-10 text-9xl md:flex lora-400 z-10">
              Broadcasting And Film Production</h1>
            <h1 className="font-bold flex m-10 text-5xl md:hidden lora-400 z-10">
              Broadcasting And Film Production</h1>

            {/* PARAF */}
              <br />
              <div className="button">
                <a href="#About" className="py-3 px-6 animation-button rounded-xl montserrat-400">See More About Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* POST CONTENT */}
      <div 
        className="w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center"
        id="About"
        ref={(e) => (sectionRefs.current['about'] = e)}
      >
        {/* paragraph */}
        <div className="wrap-paraf w-[80%]">
          <div className="title">
            <h2 className="playfair-400 text-white text-2xl ">What is broadcasting and film production?</h2>
          </div>
          <div className="paraf">
            <p className="text-md mt-2 text-gray-300 oswald-400">The Broadcasting and Film Production program at SMK Negeri 5 Bandung offers an in-depth curriculum and immersive practical training in the specialized fields of cinematography, professional photography, and multimedia content creation. This program is meticulously designed for students who are deeply passionate about visual storytelling and aspire to craft compelling and impactful content tailored for diverse media platforms, including film, television, online streaming, and social media</p>
          </div>
        </div>
        <br />
        <div className="wrap-img w-[80%]">
          <img src="https://placehold.co/1920x1080" width={'40%'} alt="" />
        </div>
      </div>
    {/* Aditional CONTENT */}
      <div 
        className="w-full h-screen flex justify-center align-center"
        id="Social"
        ref={(e) => (sectionRefs.current["social"] = e)}
        style={{
        }} 
      >
        
      </div>
    </div>
    </>
  )
}

export default App