
export default ({img, title, description, href}) => {
    return (
        <>
            <div className="p-5 flex flex-row">
                <div className="wrap-img">
                    <img src={img} alt={title} />
                </div>
                <div className="wrap-paraf">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <hr className="hr" />
                    <a href={href} className="buttonClass">See More About {title}</a>
                </div>
            </div>
        </>
    )   
}