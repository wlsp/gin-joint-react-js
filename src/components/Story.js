import '../scss/StoryMenu.css'

const Story = () => {
    return (
        <section id="story">
            <article>
                <h4>About</h4>
                <h3>The story of bathtub gin </h3>
                <p>Gin was the predominant drink in the United States during
                    the Prohibition-Era 1920's and many variations were created.
                    "Bathtub gin" was developed in response to the poor-quality
                    of alcohol that was available at the time.</p>
                    <button>Read More</button>
            </article>
            <figure>
            <img src="../images/bar2.png" alt="" />
            </figure>
        </section>
    );
}

export default Story;