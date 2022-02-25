import React from "react";

function Main(){
    return  <main class= "pg-wrapper">

<section class="banner">
        <div>
            <h2>Welcome to my portfolio</h2>
        </div>

    </section>

        <section class="page-section" id="about">
            <h2>About Me</h2>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quis sunt. Libero laborum esse id?
                    Iusto porro sequi facilis nemo? Perferendis ipsum sequi et quisquam nulla optio repellat excepturi
                    reiciendis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit minima voluptates, id iure aut
                    dolorem optio. Facilis esse cupiditate beatae necessitatibus, ullam consequuntur ab maxime illum
                    libero reprehenderit amet dolore?</p>
            </div>

        </section>

        <section class="page-section" id="work">
            <h2>Work</h2>

            <div class="work-container">

                <a href="https://wyattlibby.github.io/MTB/" class="flex-item surf">
                    <div>
                        <h3>MTB</h3>
                        <span>HTML/CSS/JS</span>

                    </div>
                </a>


                <a href="https://wyattlibby.github.io/Weather-app/" class="flex-item led">
                    <div>
                        <h3>Weather-app</h3>
                        <span>HTML/CSS/JS</span>
                    </div>
                </a>

                <a href=" https://wyattlibby.github.io/project-2-group-a/" class="flex-item led">
                    <div>
                        <h3>Full stack project</h3>
                        <span>Javascript/CSS/Handlebars</span>
                    </div>
                </a>

                <a href="#" class="flex-item calc">
                    <div>
                        <h3>Calculator</h3>
                        <span>React/Javascript/CSS</span>
                    </div>
                </a>

                <a href="#" class="flex-item puzzles">
                    <div>
                        <h3>Pastel Puzzles</h3>
                        <span>MERN Stack</span>
                    </div>
                </a>

                <a href="#" class="flex-item run">
                    <div>
                        <h3>Run Buddy</h3>
                        <span>HTML/CSS</span>
                    </div>
                </a>
            </div>

        </section>

        <section class="page-section contact" id="contact">
            <h2>Contact Me</h2>
            <div>
                <address>
                    <a href="https://github.com/wyattlibby">Github</a>
                    <a href="mailto:kingdomlandscapevt@gmail.com">kingdomlandscapevt@gmail.com</a>
                    <a href="tel:+1-802-751-9343">1-802-751-9343</a>
                    <a href="www.linkedin.com/in/bradley-libby-783131221">linkedIn</a>
                </address>
            </div>
        </section>


    </main>;
}
export default Main;