

export default ({ location, hrefRef }) => {
    return (
        <div className="z-20 fixed w-screen"
      style={{
        // backgroundColor: "#352F44",
        color: "#FAF0E6"
      }}>
        {/* Content Nav */}
        <div className="backdrop-blur-md w-full h-full p-5
        flex items-center justify-around z-10 " >
          {/* ICONS */}
        <div className="favicon flex items-center gap-2">
          <div className="w-10 h-10 p-1 bg-gray-100 rounded-md">
            <img src="/profil/assets/transparant.png " alt="logo" style={{
              width: "40px"
            }}/>
          </div>
          <h3 className="text-xl hidden md:flex montserrat-600 ">Broadcasting Dan Produksi Film</h3>
        </div>
        {/* NAVIGATION MENU */}
              <div className="wrap">
                <a href={ `#${hrefRef()}` } className="
                  p-2 px-4 border rounded-md poppins-400 anchor-nav border-gray-500 text-gray-500 
                ">{ ` ${location ? location : "Home"} ` }</a>
              </div>
        </div>
      </div>
    )
}