import EntertainmentData from '../data/Entertainment.json'

const Entertainment = () => {
    return (
        <section id="entertainment">
        <p className="covidInfo">
            Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!
        </p>
        <div className="scroll"><span className="arrow left"></span> SCROLL FOR MORE UP COMING EVENTS <span className="arrow right"></span></div>
        <div className="scrolling-wrapper">
            {EntertainmentData.map((entertainment, i) => 
            <div key={i} className="gallery__item card" >
                <figure>
                <img src={entertainment.image} alt="" className="gallery__img" />
                <figcaption><h1>{entertainment.title}</h1></figcaption>
                </figure>
                <article className="DayAndTime">
                <p>{entertainment.day}</p>
                <p>{entertainment.time}</p>
                </article>
                <p className="info">{entertainment.info}</p>
            </div>
            )}
        </div>
    </section>
    )
}

export default Entertainment ;