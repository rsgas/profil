import { useRef, useState, useEffect } from "react"
import feather from "feather-icons"

import "./conf.css"

import Navi from "./components/navi"

const Icons = ({src}) => {
  return (
    <i data-feather={src}></i>
  )
}

const App = () => {
  feather.replace()

  const profil = {
    'assets': {
      'pict' : {
        'bts' : '/profil/assets/tmp-document/random-pict/behind-the-scene.jpg'
      }
    }
  }

  // client listener

  const [userListen, setUserListen] = useState('')
  const sectionRefs = useRef({})

  // function of tagging 
  const href = () => {  
    switch (userListen) {
      case 'Home' :
        return 'profiles-1'
      case 'Profiles' :
        return 'prod-house'
      case 'Production House' : 
        return null
      s}
    }

  useEffect (() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setUserListen(entry.target.role)
        }})}; const observer = new IntersectionObserver (handleIntersection, {
      root: null,
      threshold: 0.5
    }); Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    }); return () => observer.disconnect()
  }, [])



  return (
    <>
    <div className="HOME selection:bg-fuchsia-300 selection:text-fuchsia-900">
    {/* NAVIGATION BAR */}
    <Navi location={userListen} hrefRef={href}>

    </Navi>
    {/* Main Content */}
      <div className="w-full h-screen relative overflow-hidden" ref={(e) => (sectionRefs.current['home'] = e)} role='Home' >
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
                <a href="#profiles-1" className="py-3 px-6 animation-button rounded-xl montserrat-400">See More What Is This</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* POST CONTENT */}
      <div 
        className="w-full h-screen py-5 bg-[#2b2b2b] flex flex-row flex-wrap justify-center items-center overflow-hidden"
        id="profiles-1"
        role="Profiles"
        ref={(e) => (sectionRefs.current['profiles-1'] = e)}
      >
        {/* paragraph */}
        <div className="wrap-paraf w-[70%] ">
          <div className="title">
            <h2 className="playfair-400 text-white text-2xl ">What is broadcasting and film production?</h2>
          </div>
          <div className="paraf px-2">
            <p className="text-md mt-2 text-gray-300 oswald-400">The Broadcasting and Film Production program at <a className="underline text-gray-100" target="_blank" href="https://smkn5bandung.sch.id/">SMK Negeri 5 Bandung</a> offers an in-depth curriculum and immersive practical training in the specialized fields of cinematography, professional photography, and multimedia content creation. This program is meticulously designed for students who are deeply passionate about visual storytelling and aspire to craft compelling and impactful content tailored for diverse media platforms, including film, television, online streaming, and social media</p>
            <div className="w-full flex justify-end">
              <a href="#profile-2" className="text-gray-400 oswald-400 text-xl m-4 transition-all flex items-center hover:text-white ease-out duration-300 ">Check out our skills <Icons src='arrow-down'></Icons></a>
              
            </div>
          </div>
        </div>
        
      </div>
      {/* additional content about */}
      <div className="bg-[#2b2b2b] flex flex-col justify-center items-center overflow-hidden h-auto w-full" id="profile-2">
      <div className="h-[1px] w-[80%] bg-gray-400 my-2" ></div> {/* Href */}
        <br />
        <div className="wrap-paraf-img w-[80%]">
          <div className="coll w-full flex flex-col lg:flex-row">
            <div className="paraf w-full ">
              <h3 className="playfair-400 text-xl text-white">Skills Developed</h3>
              <p className="text-md mt-2 px-2 text-gray-300 oswald-400">
                Mastering the art of visual storytelling involves a comprehensive skill set, including expertise in professional video editing software to produce high-quality narratives. With a strong focus on cinematography, students learn advanced camera techniques and the use of cutting-edge equipment to capture stunning visuals. 
                This holistic approach encompasses the entire production cycle, from pre-production planning and scriptwriting to meticulous post-production editing and publishing.
              </p>
              <br />
              <h3 className="playfair-400 text-md text-white">The Skills We Possess</h3>
              <ol className="text-md mt-2 px-7 list-decimal text-gray-300 oswald-400">
                <li>Video Editing: Mastering professional software to produce high-quality visual stories.</li>
                <li>Cinematography: Capturing stunning visuals using advanced camera techniques and equipment.</li>
                <li>Film Projects: Creating short films, documentaries, and other video projects from concept to completion.</li>
                <li>Studio Photography: Learning to use studio lighting and cameras to capture professional-grade photographs.</li>
                <li>Pre- and Post-Production: Managing all stages of production, from planning and scriptwriting to editing and publishing.</li>
              </ol>
            </div>
             <div className="w-full flex justify-center">
              <img src={profil.assets.pict.bts} className="my-10 w-[500px]" alt="err" />
             </div>
          </div>
        </div>
      <div className="h-[1px] w-[80%] mt-5 bg-gray-400 my-2" ></div> {/* Href */}
        <div className="h-auto w-[80%]">
          <h3 className="playfair-400 text-white text-2xl">Equipment And Software That We Use</h3>
          <div className="text-md mt-2 px-7 list-decimal text-gray-300 oswald-400">
                <p>1. <span className="text-white">Cameras: DSLR and Mirrorless Cameras: </span>Students learn to operate advanced DSLR and mirrorless cameras, mastering settings like aperture, shutter speed, ISO, and white balance. These cameras are used for capturing high-resolution photos and videos, providing flexibility for different shooting conditions. Students also practice using interchangeable lenses, including wide-angle, telephoto, and prime lenses, to achieve various creative effects in their projects.</p> 
                <p className="my-2">2. <span className="text-white">Lighting Equipment: Studio Lighting Setups: </span>With professional studio lighting setups, students explore techniques for creating mood and enhancing visual quality. They work with tools like softboxes, ring lights, LED panels, and reflectors to understand how light direction, intensity, and color temperature affect the final image. Practical sessions involve configuring three-point lighting systems for interviews, product shoots, and cinematic scenes.</p>
          </div>
        </div>
      </div>
    {/* Aditional CONTENT */}
      <div 
        className="w-full h-screen flex justify-center align-center"
        id="prod-house"
        role="Production House"
        ref={(e) => (sectionRefs.current["social"] = e)}>
      </div>
    </div>
    </>
  )
}

export default App