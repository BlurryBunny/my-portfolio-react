import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
    return (
        <Col sm={12} md={6}  >
            <a href={projectUrl} target="_blank"  id="link-card-project">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="inserte imagen" />
                    <div className="proj-txtx">
                        <h4 >{title}</h4>
                        <span>{description}</span>
                    </div>

                </div>
            </a>
        </Col>
    )
}
