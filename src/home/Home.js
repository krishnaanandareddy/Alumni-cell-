import React from 'react'
import { auth } from '../firebase'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import { Row, Col } from 'react-bootstrap';
import director from "../Icons/director.jpg";
import iiti from "../Icons/iiti.jpg";
import './home.css'
import Carouselforhome from '../Carousel/Carouselforhome';
import Alumnipics from '../Alumnipics/alumnipics';


const Home = (User) => {
    return (
        <div className="home">
            <NavBar />
            <div className="container">
                <Row>
                    <Col sm={12} lg={8}>
                        <div>
                            <Alumnipics/>
                        </div>
                    </Col>
                    <Col sm={12} lg={4}>
                        <div>
                           create profile page
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="margin-container-home">
                <Row>
                    <Col sm={12} lg={4}>
                        <div>
                            <div className="iiti-image text-center">
                                <img src={iiti} />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={8}>
                        <div>
                            <div className="iiti-message text-center">
                                <h3>
                                    ABOUT IIT INDORE ALUMNI ASSOCIATION
                                </h3>
                                <p>
                                    The Alumni Association of IITI aims to strengthen the pre-existing collaboration between the institute and its Alumni in the former's pursuit of perfection. A strong and established Alumni network is the key factor in designing the performance chart of an Institute and we at IITI believe in aiming to enhance institute's development by bringing in numerous opportunities for both the Alumni and their respective corporations, as well as the students.
                                </p>
                                <p>
                                    IIT Indore currently boasts of about 1500 registered alumni, including both former undergraduate and graduate students. A bountiful number of persons among these are successfully engaged in nation-building by advancing services to Public Sector Units and internationally renowned organizations, while some others have taken up entrepreneurial digressions.
                                </p>
                                <p>
                                    The Alumni Association holds a vision to render support to Corporations as well as the nurturing pupils and to utilize and to augment Institute's endowments.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Carouselforhome /> 

            <div className="margin-container-home">
                <Row>
                    <Col sm={12} lg={8}>
                        <div >
                            <div className="director-message text-center">
                                <h3>
                                    Message from Director
                                </h3>
                                <p>
                                    World over, the most acclaimed universities and institutions boast of having a strong and vibrant alumnus base.
                                </p>
                                <p>
                                    The alumni network of IIT Indore forms a very important and significant element to propel the institute towards excellence in all spheres of science, technology, humanity and social sciences, and in producing leaders.
                                </p>
                                <p>
                                    IIT Indore has been fortunate, right from its first graduating batch, to have a robust institute- alumni network, which we must all nurture and see its exponential growth in all dimensions.
                                </p>
                                <p>
                                    With the very best wishes
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={4}>
                        <div>
                            <div className="director-image text-center">
                                <img src={director} />

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="margin-container-home">
                <Row>
                    <Col sm={12} lg={6}>
                        <div>
                            <div className="Alumni-stories text-center">
                                hello
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div>
                            <div className="stories-message text-center">
                                world
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    )
}

export default Home
