import React from "react";

const About = () => {
    return (
        <>
            <main>
                <h1 className="text-center text-3xl font-bold tracking-wide m-8 mt-10">About ME</h1>
                <div className="expert text-center">
                    <h2 className="text-lg m-6">As a seasoned full-stack developer, I specialize in building web applications and services. <br />
                    I'm also skilled in creating animations, which elevate user experience by adding dynamic elements to interfaces. </h2>
                    <hr className="distinguish mb-3"/>
                    <h3 className="text-xl font-semibold m-4 mt-3">My expertise includes :</h3>
                    <ul className="expertise text-center text-base">
                        <li>In my experience, Frontend Development entails crafting user-friendly interfaces with JavaScript, HTML5, CSS3, Bootstrap, and jQuery.</li>
                        <li>Incorporating React and Next.js enhances development by enabling dynamic UIs and optimizing performance.</li>
                        <li>Backend Development with Node.js and Express.js involves creating server-side logic and APIs for web applications.</li>
                        <li>API Designing for mobile apps and websites involves creating streamlined interfaces for seamless communication between clients and servers.</li>
                        <li>Frontend Designing with Bootstrap, React.js, and Next.js involves creating responsive, dynamic user interfaces with reusable components and optimized performance.</li>
                        <li>SQL and NoSQL database management systems efficiently organize, store, and retrieve data, meeting diverse needs and scalability demands in modern applications.</li>
                        <li>AWS and Google Cloud Platform provide scalable and secure cloud infrastructure services for efficient application deployment and management.</li>
                        <a type="submit" className="m-6 pr-3 pl-3 border border-solid rounded-full text-lg hover:uppercase" href="/resume.pdf" download="Abhinav Jain Resume.pdf">view resume</a>
                        <br/>
                    </ul>
                    <hr className="distinguish"/>
                    <h3 className="text-xl font-semibold m-4 mt-3">Experience :</h3>
                    <p>
                        {/* <hr className="newLine"/> */}
                    many more work to do ahead</p>
                    <hr className="horLine"/>
                    <br/>
                    <br/>   
                    <ul>
                        <li className="right m-3"><span className="title text-lg font-medium">TalentOla Solutions Pvt. Ltd.</span><br/><hr className="lineR m-1"/>
                            • February 2024 - April 2024
                            <p>It is a recruiting company, where I got to know about how the <br /> companies recruit the candidate and how does ATS works.</p>
                        </li>
                        <br/>
                        <li className="left m-3"><span className="title text-lg font-medium">Continuum Global Solutions</span><br/><hr className="lineL m-1"/>
                            • January 2024 - February 2024
                            <p>A MNC BPO company, where I worked as a Assoc. II Customer <br /> Care. Here I developed my communication skills and get experience <br /> about the America region.</p>
                        </li>
                        <br/>
                        <li className="right m-3"><span className="title text-lg font-medium">Malwa Institute of Science and Technology</span><br/><hr className="lineR m-1"/>
                            • August 2023 - October 2023
                            <p>Acquired knowledge in the new technology, namely Java. Developed <br /> a comprehensive project integrating MySQL, Java, and Web Designing.</p>
                        </li>
                        <br/>
                        <li className="left m-3"><span className="title text-lg font-medium">Quintus Tech Pvt. Ltd.</span><br/><hr className="lineL m-1"/>
                            • June 2023 - August 2023
                            <p>Acquired knowledge in new technologies, namely JavaScript and API. <br /> Developed the backend using Node.js and gained proficiency in Angular.</p>
                        </li>
                        <br/>
                        <li className="right m-3"><span className="title text-lg font-medium">IMC (Indore Municipal Corporation)</span><br/><hr className="lineR m-1"/>
                            • April 2023 - June 2023
                            <p>Ascended the technical background AICTSL (Atal Indore City Transport <br /> Service Ltd.). Acquired knowledge and devised plans for city transport <br /> service operations.</p>
                        </li>
                        <br/>
                        <li className="left m-3"><span className="title text-lg font-medium">Samyak Classes</span><br/><hr className="lineL m-1"/>
                            • January 2023 - April 2023
                            <p>Acquired knowledge in the new technology, namely Java. Developed <br /> a comprehensive project integrating MySQL, Java, and Web Designing.</p>
                        </li>
                        <br/>
                        <p className="m-6">
                            {/* <hr className="newLine"/> */}
                            start</p>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default About;