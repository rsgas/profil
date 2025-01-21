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
                <a href="#About" className="py-3 px-6 animation-button rounded-xl montserrat-400">See More What Is This</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* POST CONTENT */}
      <div 
        className="w-full h-auto py-10 lg:h-screen bg-[#2b2b2b] flex flex-row flex-wrap justify-center items-center overflow-hidden"
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
        <div className="h-[1px] w-[80%] bg-gray-400 my-2" ></div>
        <br />
        <div className="wrap-paraf-img w-[80%]">
          <div className="coll w-full flex flex-col lg:flex-row">
            <div className="paraf w-full ">
              <h3 className="playfair-400 text-xl text-white">Skills Developed</h3>
              <p className="text-md mt-2 px-2 text-gray-300 oswald-400">
                Mastering the art of visual storytelling involves a comprehensive skill set, including expertise in professional video editing software to produce high-quality narratives. With a strong focus on cinematography, students learn advanced camera techniques and the use of cutting-edge equipment to capture stunning visuals. 
                This holistic approach encompasses the entire production cycle, from pre-production planning and scriptwriting to meticulous post-production editing and publishing.
              </p>
              <p className="text-md mt-2 p-2 text-gray-300 oswald-400">The journey extends to hands-on experience in creating diverse film projects such as short films, documentaries, and other visual media, covering every step from concept development to final production. Additionally, proficiency in studio photography is developed, focusing on the use of lighting and cameras to achieve professional-grade results.</p>
            </div>
             <div className="w-full flex justify-center">
              <img src="https://placehold.co/1920x1080" className="my-10 w-[500px]" alt="err" />
             </div>
          </div>
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