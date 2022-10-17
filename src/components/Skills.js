import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import tech1 from '../assets/img/tech-vuejs.svg';
import tech2 from '../assets/img/tech-sql.svg';
import tech3 from '../assets/img/tech-react.svg';
import tech4 from '../assets/img/tech-mongo.svg';
import tech5 from '../assets/img/tech-laravel.svg';
import tech6 from '../assets/img/tech-github.svg';
import tech7 from '../assets/img/tech-flutter.svg';
import tech8 from '../assets/img/tech-figma.svg';
import tech9 from '../assets/img/tech-bootstrap.svg';


import colorSharp from '../assets/img/color-sharp.png';




export const Skills = () => {

    const technologies = [
        {
            title: "Vue Js",
            imgUrl: tech1,
        },

        {
            title: "Laravel",
            imgUrl: tech5,
        },

        {
            title: "React",
            imgUrl: tech3,
        },

        {
            title: "Flutter",
            imgUrl: tech7,
        },

        {
            title: "SQL",
            imgUrl: tech2,
        },

        {
            title: "Mongo DB",
            imgUrl: tech4,
        },

        {
            title: "Bootstrap",
            imgUrl: tech9,
        },
        {
            title: "Figma",
            imgUrl: tech8,
        },

        {
            title: "Github",
            imgUrl: tech6,
        },

    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },

        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },


        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },

        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },

    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">

                            <div className="container" id="skill-bx-text">
                                <h2>
                                    Technologies
                                </h2>

                                <p>Since I started my studies in systems engineering, I have tried different technologies, but at the moment some of them are the ones I have worked with and I have knowledge of.</p>
                            </div>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                {
                                    technologies.map((technology, index) => {
                                        return (

                                            <div className="item"
                                                key={index}>
                                                <img src={technology.imgUrl} alt="anImage" />
                                                <h5>{technology.title}</h5>

                                            </div>
                                        )
                                    })
                                }

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
