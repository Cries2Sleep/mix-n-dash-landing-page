import Carousel from "react-bootstrap/Carousel";
import { MDBCardImage } from "mdb-react-ui-kit";
export default function CarouselJasmine() {
    return (
        <Carousel interval={1500} fade>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg"
                alt="Gin Sling"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Gin Sling</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg"
                alt="Whiskey Sour"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Whiskey Sour</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
                alt="Old Fashioned"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Old Fashioned</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg"
                alt="Smut"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Smut</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}