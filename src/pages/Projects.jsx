import React, { useEffect } from 'react'
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Projects() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <header id="project">
            <span className="project-title">
                <h1>Personal Projects</h1>
                <div data-aos="fade-right" data-aos-duration="1000" class="col-sm-8 mx-auto mt-5 aos-init aos-animate">
                    <div class="card software-card">
                        <div class="card-body">
                            <div class="sw-img-container">
                            </div>
                            <div>
                                <h4>
                                    <i class="fa-solid fa-star"></i>
                                    &nbsp;Automated Cloud Ticketing System&nbsp;
                                    <span class="badge csharp-badge">C#</span>

                                    <span class="badge aws-badge">AWS</span>
                                </h4>
                            </div>
                            <p>
                                Designed a hybrid cloud application using AWS technologies to process license plates and notify fictional drivers of their traffic infraction via AWS SES.
                                Implemented AWS Rekognition for text extraction of license plates images, S3 bucket system for storing plate information, and automated the system using a Windows Worker Service to streamline functionality of the program
                            </p>
                            <div class="button-row d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a type="button" class="btn btn-sm btn-success" href="https://github.com/Korrubi/Automated-Cloud-Ticketing-System" target="_blank">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" class="col-sm-8 mx-auto mt-5 aos-init aos-animate">
                    <div class="card software-card">
                        <div class="card-body">
                            <div class="sw-img-container">
                            </div>
                            <div>
                                <h4>
                                    <i class="fa-solid fa-star"></i>
                                    &nbsp;Food Recommendation Android App - Senior Project&nbsp;
                                    <span class="badge java-badge">Java</span>

                                    <span class="badge aws-badge">AWS</span>

                                    <span class="badge kotlin-badge">Kotlin</span>
                                </h4>
                            </div>
                            <p>
                                Used Android Studio to write an application in Kotlin and Java that provides the user with a meal recommendation depending on their diets, cuisine preference, allergies, and eating habits.
                                Applied all phases of the software development lifecycle (SDLC) to produce a high-quality product in a short time frame.
                                Leveraged AWS DynamoDB and AWS Cognito to implement secure authentication, sign up, and database storage while also implementing APIs to pull recipes from online web sources.
                            </p>
                            <div class="button-row d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a type="button" class="btn btn-sm btn-success" href="https://github.com/Korrubi/Senior-Capstone" target="_blank">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="500" class="bottom-card col-sm-8 mx-auto mt-5 mb-3 aos-init aos-animate">
                    <div class="card software-card">
                        <div class="card-body">
                            <div class="sw-img-container">
                            </div>
                            <div>
                                <h4>
                                    <i class="fa-solid fa-star"></i>
                                    &nbsp;KiloWatts for Humanity | Seattle University&nbsp;
                                    <span class="badge rstudio-badge">R Studio</span>
                                </h4>
                            </div>
                            <p>
                                Utilized R/RStudio to identify long term energy solutions for small fishing communities of the Napuagan, Bucatan, and Camanga villages in the Philippines
                                Transformed and converted data into actionable insights to visualize the social and economic status of each community and helped clarify the needs of each village helping bring renewable energy to remote villages on an affordable budget
                            </p>
                            <div class="button-row d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a type="button" class="btn btn-sm btn-success" href="https://github.com/Korrubi/KiloWatts-Project" target="_blank">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </header>
    )
}

export default Projects
