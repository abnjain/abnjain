import React from "react";

const About = () => {
    return (
        <>
            <main>
                <h1 className="text-center text-3xl font-bold tracking-wide m-8 mt-10">About <span className="text-custom-fireOpal">ME</span></h1>
                <div className="expert text-center m-2">
                    <h2 className="text-lg m-6">As a seasoned full-stack developer, I specialize in building web applications and services. <br className="hidden md:block" />
                    I'm also skilled in creating animations, which elevate user experience by adding dynamic elements to interfaces. </h2>
                    <hr className="mb-3 opacity-20 w-2/3 mx-auto" />
                    <h3 className="text-xl font-semibold m-4 mt-3">My <span className="text-custom-fireOpal">expertise</span> includes :</h3>
                    <ul className="expertise text-center text-base space-y-2">
                        <li>In my experience, Frontend Development entails crafting user-friendly interfaces with JavaScript, HTML5, CSS3, Bootstrap, and jQuery.</li>
                        <li>Incorporating React and Next.js enhances development by enabling dynamic UIs and optimizing performance.</li>
                        <li>Backend Development with Node.js and Express.js involves creating server-side logic and APIs for web applications.</li>
                        <li>API Designing for mobile apps and websites involves creating streamlined interfaces for seamless communication between clients and servers.</li>
                        <li>Frontend Designing with Bootstrap, React.js, and Next.js involves creating responsive, dynamic user interfaces with reusable components and optimized performance.</li>
                        <li>SQL and NoSQL database management systems efficiently organize, store, and retrieve data, meeting diverse needs and scalability demands in modern applications.</li>
                        <li>AWS and Google Cloud Platform provide scalable and secure cloud infrastructure services for efficient application deployment and management.</li>
                        <li>Proficient in PHP and WordPress, I build dynamic websites and content management systems tailored for user engagement.</li>
                        <li>Experienced in SEO strategies to enhance website visibility and drive organic traffic through optimized content and metadata.</li>
                        <br/>
                    </ul>
                        <a type="submit" className="mb-6 px-3 text-custom-fireOpal border border-solid rounded-full text-lg hover:uppercase" href="/resume.pdf" download="Abhinav_Jain_Resume.pdf">view resume</a>
                    <hr className="mb-3 opacity-20 w-2/3 mx-auto" />
                    <h3 className="text-xl font-semibold m-4 mt-3">Experience :</h3>
                    <p className="many">many more work to do ahead</p>
                    <hr className="bLine flex md:hidden"/>
                    <hr className="horLine"/>
                    <br/>
                    <br/>   
                    <ul>
                        <li className="left m-3">
                            <span className="title text-lg font-medium">Web Development Projects</span><br/><hr className="lineL m-1"/>
                            • Ongoing
                            <p>Developed dynamic websites like <a className="text-custom-fireOpal hover:uppercase" href="https://dogcyclopedia.com" target="_blank">dogcyclopedia.com</a> using PHP <br className="hidden md:block" /> and WordPress, optimizing them for SEO to enhance visibility <br className="hidden md:block" /> and user engagement.</p>
                        </li>
                        <br/>
                        <li className="right m-3">
                            <span className="title text-lg font-medium">TalentOla Solutions Pvt. Ltd.</span><br/><hr className="lineR m-1"/>
                            • February 2024 - April 2024
                            <p>It is a recruiting company, where I got to know about how the <br className="hidden md:block" /> companies recruit the candidate and how does ATS works.</p>
                        </li>
                        <br/>
                        <li className="left m-3">
                            <span className="title text-lg font-medium">Continuum Global Solutions</span><br/><hr className="lineL m-1"/>
                            • January 2024 - February 2024
                            <p>A MNC BPO company, where I worked as an Assoc. II Customer <br className="hidden md:block" /> Care. Here I developed my communication skills and gained experience <br className="hidden md:block" /> about the American region.</p>
                        </li>
                        <br/>
                        <li className="right m-3">
                            <span className="title text-lg font-medium">Malwa Institute of Science and Technology</span><br/><hr className="lineR m-1"/>
                            • August 2023 - October 2023
                            <p>Acquired teaching skills and knowledge in the new technology, <br className="hidden md:block" /> namely Java. Developed a comprehensive live project integrating <br className="hidden md:block" /> MySQL, Java, and Web Designing namely <a className="text-custom-fireOpal hover:uppercase" href="https://kgstocks.in" target="_blank">Kuber Group</a>.</p>
                        </li>
                        <br/>
                        <li className="left m-3">
                            <span className="title text-lg font-medium">Quintus Tech Pvt. Ltd.</span><br/><hr className="lineL m-1"/>
                            • June 2023 - August 2023
                            <p>Acquired knowledge in new technologies, namely JavaScript and API <br className="hidden md:block" /> created APIs like <a className="text-custom-fireOpal hover:uppercase" href="https://github.com/abnjain/Nodemailer_API" target="_blank">nodemailerAPI</a>, <a className="text-custom-fireOpal hover:uppercase" href="https://github.com/abnjain/encryption_decryption" target="_blank">encrption_decryption(of BBPS)</a> and <br className="hidden md:block" /> <a className="text-custom-fireOpal hover:uppercase" href="https://github.com/abnjain/hospitalAPI" target="_blank">hospitalAPI</a>. Developed the backend using Node.js and gained <br className="hidden md:block" /> proficiency in Angular.</p>
                        </li>
                        <br/>
                        <li className="right m-3">
                            <span className="title text-lg font-medium">IMC (Indore Municipal Corporation)</span><br/><hr className="lineR m-1"/>
                            • April 2023 - June 2023
                            <p>Ascended the technical background AICTSL (Atal Indore City Transport <br className="hidden md:block" /> Service Ltd.). Acquired knowledge and devised plans for city transport <br className="hidden md:block" /> service operations.</p>
                        </li>
                        <br/>
                        <li className="left m-3">
                            <span className="title text-lg font-medium">Samyak Classes</span><br/><hr className="lineL m-1"/>
                            • January 2023 - April 2023
                            <p>Acquired knowledge in the new technology, namely Java. Developed <br className="hidden md:block" /> a comprehensive project integrating MySQL, Java, and Web Designing namely <a className="text-custom-fireOpal hover:uppercase" href="https://github.com/abnjain/hospitalAPI" target="_blank">shikshakRecruitment</a>.</p>
                        </li>
                        <br/>
                    </ul>
                    <hr className="aLine flex md:hidden"/>
                        <p className="start">start</p>
                </div>
            </main>
        </>
    )
}

export default About;