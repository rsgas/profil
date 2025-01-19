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
        return 'Home'
    }
  }

  useEffect (() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setUserListen(entry.target.id)
        }
      })
    } 

    // observer declaration 
    const observer = new IntersectionObserver (handleIntersection, {
      root: null,
      threshold: 0.5
    })

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])



  return (
    <>
    <div className="HOME">
    {/* NAVIGATION BAR */}
    <Navi location={userListen} hrefRef={href}>

    </Navi>
    {/* Main Content */}
      <div className="w-full h-screen relative overflow-hidden" id='Home' ref={(e) => (sectionRefs.current['home'] = e)} >
      <img src="/assets/bg/items/clapperboard.png" alt="clapperboard" 
        width={300} className="
          blur-sm
          absolute
          left-3/4
          rotate-45
          hidden
          lg:flex
        "/>
      <img src="/assets/bg/items/camera.png" alt="clapperboard" 
        width={300} className="
          blur-sm
          absolute
          top-1/2
          -rotate-45  
          transform scale-x-[-1]  
          hidden
          lg:flex
        "/>
      <img src="/assets/bg/items/laptop.png" alt="clapperboard" 
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
            <h1 className="font-bold hidden text-9xl md:flex lora-400 z-10">
              Broadcasting Dan Produksi Film</h1>
            <h1 className="font-bold flex text-5xl md:hidden lora-400 z-10">
              Broadcasting Dan Produksi Film</h1>

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
        className="w-full h-screen"
        id="About"
        ref={(e) => (sectionRefs.current['about'] = e)}
        style={{
          backgroundColor: "#202020",
        }} 
      >
        <div className="main-panel">
          
        </div>
      </div>
    {/* Aditional CONTENT */}
      <div 
        className="w-full h-screen"
        id="Social"
        ref={(e) => (sectionRefs.current["social"] = e)}
        style={{
          backgroundColor: "red",
        }} 
      >
      
      </div>
    </div>
    </>
  )
}

export default App