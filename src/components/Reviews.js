import React from "react";
import '../scss/Reviews.css'

const Reviews = () => {
    return (
        <section id="reviews">
            <article className="review gin" >
                <figure>
                    <img src="../images/gin.png" alt="" />
                </figure>
                <h2>
                    “A trick door opening to Bathtub Gin, a hopping Chelsea gin
                    joint harkening back to the days of false store fronts”
                </h2>
                <p>The Guardian</p>
            </article>
            <article className="review jack" >
                <figure>
                    <img src="../images/jack.png" alt="" />
                </figure>
                <h2>
                    “Life on the inside: exactly how you imagined it’d be...
                    nailhead-tucked bar stools and—smack-dab in the center of
                    the room—a glass-covered, claw-foot bathtub.”
                </h2>
                <p>Urban Daddy</p>
            </article>
        </section>
    );
}

export default Reviews;