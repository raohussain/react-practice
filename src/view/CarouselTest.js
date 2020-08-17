import React from 'react';
import { Carousel } from 'antd';
import banner from '../img/banner.jfif';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

class CarouselTest extends React.Component {
	constructor(props) {
	    super(props);
	     // const [slide, setSlide] = useState(0);
	    this.carousel = React.createRef();
	    // this.slider = useRef();
	}
    render() {
        return (
   			<div>
   					<Carousel ref={ref => {
		            // console.log(ref);
		            this.carousel.current = ref;
		          }}  className="carousel-wrapper">
					<div className="comment-section">
						<div className="left-arrow-wrapper" onClick={() => this.carousel.current.slick.slickPrev()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleLeft}>
							</FontAwesomeIcon>*/}
						</div>
						<div className="right-arrow-wrapper" onClick={() => this.carousel.current.slick.slickNext()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleRight}>
							</FontAwesomeIcon>*/}
						</div>
						<Container>
							<Row>
								<Col sm="12">
									<div className="section">
										<div className="comments">
											J'ai trouvé un architecte pour la rénovation de ma maison.
											 L'estimation de travaux en ligne nous a permis de monter notre budget prévisionnel.Murielle H.
										</div>
										<div className="commented-by">
											<div className="photo">
												<img src={banner} className="image" />
											</div>
											{/*<div className="profile-description">
												<div className="name">Natilia Stephavona</div>
												<div className="job-title">IOS Developer</div>
												<div className="rating">* * * * *</div>
											</div>*/}
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="comment-section">
						<div className="left-arrow-wrapper" onClick={() => this.carousel.current.slick.slickPrev()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleLeft}>
							</FontAwesomeIcon>*/}
						</div>
						<div className="right-arrow-wrapper" onClick={() => this.carousel.current.slick.slickNext()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleRight}>
							</FontAwesomeIcon>*/}
						</div>
						<Container>
							<Row>
								<Col sm="12">
									<div className="section">
										<div className="comments">
											J'ai trouvé un architecte pour la rénovation de ma maison.
											 L'estimation de travaux en ligne nous a permis de monter notre budget prévisionnel.Murielle H.
										</div>
										<div className="commented-by">
											<div className="photo">
												<img src={banner} className="image" />
											</div>
											{/*<div className="profile-description">
												<div className="name">Natilia Stephavona</div>
												<div className="job-title">IOS Developer</div>
												<div className="rating">* * * * *</div>
											</div>*/}
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="comment-section">
						<div className="left-arrow-wrapper" onClick={() => this.carousel.current.slick.slickPrev()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleLeft}>
							</FontAwesomeIcon>*/}
						</div>
						<div className="right-arrow-wrapper" onClick={() => this.carousel.current.slick.slickNext()}>
							{/*<FontAwesomeIcon className="angle" icon={faAngleRight}>
							</FontAwesomeIcon>*/}
						</div>
						<Container>
							<Row>
								<Col sm="12">
									<div className="section">
										<div className="comments">
											Mise en relation simple et rapide.
											 Nous avons apprécié le contact direct avec le professionnel. Nathalie M.
										</div>
										<div className="commented-by">
											<div className="photo"><img src={banner} className="image" /></div>
											{/*<div className="profile-description">
												<div className="name">Natilia Stephavona</div>
												<div className="job-title">IOS Developer</div>
												<div className="rating">* * * * *</div>
											</div>*/}
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</Carousel>
   			</div>
   	)
    }
}

export default CarouselTest