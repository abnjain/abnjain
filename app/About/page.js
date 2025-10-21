import React from "react";

const About = () => {
    const expertise = [
        "Frontend Development entails crafting user-friendly interfaces with JavaScript, HTML5, CSS3, Bootstrap, and jQuery.",
        "Incorporating React and Next.js enhances development by enabling dynamic UIs and optimizing performance.",
        "Backend Development with Node.js and Express.js involves creating server-side logic and APIs for web applications.",
        "API Designing for mobile apps and websites involves creating streamlined interfaces for seamless communication between clients and servers.",
        "Frontend Designing with Bootstrap, React.js, and Next.js involves creating responsive, dynamic user interfaces with reusable components and optimized performance.",
        "SQL and NoSQL database management systems efficiently organize, store, and retrieve data, meeting diverse needs and scalability demands in modern applications.",
        "AWS and Google Cloud Platform provide scalable and secure cloud infrastructure services for efficient application deployment and management.",
        "Proficient in PHP and WordPress, I build dynamic websites and content management systems tailored for user engagement.",
        "Experienced in SEO strategies to enhance website visibility and drive organic traffic through optimized content and metadata.",
    ];

    const experiences = [
        {
            side: "left",
            title: "Web Development Projects",
            period: "Ongoing",
            description: (
                <>
                    Developed dynamic websites like{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://dogcyclopedia.com"
                        target="_blank"
                    >
                        dogcyclopedia.com
                    </a>{" "}
                    using PHP and WordPress, optimizing them for SEO to enhance visibility
                    and user engagement.
                </>
            ),
        },
        {
            side: "right",
            title: "TalentOla Solutions Pvt. Ltd.",
            period: "February 2024 - April 2024",
            description:
                "A recruiting company where I learned how companies recruit candidates and how ATS systems function.",
        },
        {
            side: "left",
            title: "Continuum Global Solutions",
            period: "January 2024 - February 2024",
            description:
                "Worked as Assoc. II Customer Care in a BPO MNC, improving communication skills and understanding of the American region.",
        },
        {
            side: "right",
            title: "Malwa Institute of Science and Technology",
            period: "August 2023 - October 2023",
            description: (
                <>
                    Acquired teaching skills and developed a live project integrating
                    MySQL, Java, and Web Design —{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://kgstocks.in"
                        target="_blank"
                    >
                        Kuber Group
                    </a>
                    .
                </>
            ),
        },
        {
            side: "left",
            title: "Quintus Tech Pvt. Ltd.",
            period: "June 2023 - August 2023",
            description: (
                <>
                    Gained experience in JavaScript and API development, creating APIs
                    like{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://github.com/abnjain/Nodemailer_API"
                        target="_blank"
                    >
                        nodemailerAPI
                    </a>
                    ,{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://github.com/abnjain/encryption_decryption"
                        target="_blank"
                    >
                        encryption_decryption (of BBPS)
                    </a>
                    , and{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://github.com/abnjain/hospitalAPI"
                        target="_blank"
                    >
                        hospitalAPI
                    </a>
                    . Built backends with Node.js and gained proficiency in Angular.
                </>
            ),
        },
        {
            side: "right",
            title: "IMC (Indore Municipal Corporation)",
            period: "April 2023 - June 2023",
            description:
                "Enhanced technical background at AICTSL (Atal Indore City Transport Service Ltd.) and devised operational plans for city transport.",
        },
        {
            side: "left",
            title: "Samyak Classes",
            period: "January 2023 - April 2023",
            description: (
                <>
                    Developed a comprehensive project integrating MySQL, Java, and Web
                    Design —{" "}
                    <a
                        className="text-custom-fireOpal hover:uppercase"
                        href="https://github.com/abnjain/hospitalAPI"
                        target="_blank"
                    >
                        shikshakRecruitment
                    </a>
                    .
                </>
            ),
        },
    ];

    return (
        <main>
            <h1 className="text-center text-3xl font-bold tracking-wide m-8 mt-10">
                About <span className="text-custom-fireOpal">ME</span>
            </h1>

            <section className="expert text-center m-2">
                <h2 className="text-lg m-6">
                    As a seasoned full-stack developer, I specialize in building web
                    applications and services.
                    <br className="hidden md:block" />
                    I'm also skilled in creating animations that elevate user experience
                    through dynamic interfaces.
                </h2>

                <hr className="mb-3 opacity-20 w-2/3 mx-auto" />

                <h3 className="text-xl font-semibold m-4 mt-3">
                    My <span className="text-custom-fireOpal">expertise</span> includes:
                </h3>

                <ul className="expertise text-center text-base space-y-2">
                    {expertise.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <a
                    className="inline-block mt-6 mb-6 px-4 py-2 border border-solid rounded-full text-lg text-custom-fireOpal hover:uppercase transition"
                    href="/resume.pdf"
                    download="Abhinav_Jain_Resume.pdf"
                >
                    View Resume
                </a>

                <hr className="mb-3 opacity-20 w-2/3 mx-auto" />

                <h3 className="text-xl font-semibold m-4 mt-3">Experience:</h3>
                <p className="many">Many more works ahead 🚀</p>

                <ul className="mt-6">
                    {experiences.map((exp, index) => (
                        <li
                            key={index}
                            className={`${exp.side} m-3 text-left md:text-base text-sm`}
                        >
                            <span className="title text-lg font-medium">{exp.title}</span>
                            <hr
                                className={`m-1 ${exp.side === "left" ? "lineL" : "lineR"}`}
                            />
                            <p className="text-gray-700 font-light italic">{exp.period}</p>
                            <p className="mt-1">{exp.description}</p>
                        </li>
                    ))}
                </ul>

                {/* <hr className="aLine flex md:hidden" /> */}
                <p className="start">start</p>
            </section>
        </main>
    );
};

export default About;