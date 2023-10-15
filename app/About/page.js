import React from "react";

const About = () => {
    return (
        <>
            <main>
                <h1>About ME</h1>
                <div className="expert">
                    <h2>I am a full stack developer with experience in building web applications and services. </h2>
                    <hr className="distinguish"/>
                    <h3>My expertise includes:</h3>
                    <ul className="expertise">
                        <li>Frontend Development using JavaScript, HTML5/CSS3, Bootstrap & jQuery.</li>
                        <li>Backend Development using Nodejs & ExpressJS.</li>
                        <li>API Designing for mobile apps and websites.</li>
                        <li>Frontend Designing using Bootstrap, Reactjs and Nextjs.</li>
                        <li>Database management systems like MySQL, MongoDB etc.</li>
                        <li>Cloud solutions such as AWS, Google Cloud Platform.</li>
                        <button type="submit" className="button"><a href="/resume" target="_blank">View Resume</a></button><br/>
                    </ul>
                    <hr className="distinguish"/>
                    <h3>Experience:</h3>
                    <p><hr className="newLine"/>many more work to do ahead</p>
                    <hr className="horLine"/>
                    <br/>
                    <br/>   
                    <ul>
                        <li className="right"><span className="title">Malwa Institute of Science and Technology</span><br/><hr className="lineR"/>
                            • August 2023 - Present
                            <p>Acquired knowledge in the new technology, namely Java. Developed a comprehensive project integrating MySQL, Java, and Web Designing.</p>
                        </li>
                        <br/>
                        <li className="left"><span className="title">Quintus Tech Pvt. Ltd.</span><br/><hr className="lineL"/>
                            • June 2023 - August 2023
                            <p>Acquired knowledge in new technologies, namely JavaScript and API. Developed the backend using Node.js and gained proficiency in Angular.</p>
                        </li>
                        <br/>
                        <li className="right"><span className="title">IMC (Indore Municipal Corporation)</span><br/><hr className="lineR"/>
                            • April 2023 - June 2023
                            <p>Ascended the technical background AICTSL (Atal Indore City Transport Service Ltd.). Acquired knowledge and devised plans for city transport service operations.</p>
                        </li>
                        <br/>
                        <li className="left"><span className="title">Samyak Classes</span><br/><hr className="lineL"/>
                            • January 2023 - April 2023
                            <p>Acquired knowledge in the new technology, namely Java. Developed a comprehensive project integrating MySQL, Java, and Web Designing.</p>
                        </li>
                        <br/>
                        <p><hr className="newLine"/>start</p>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default About;