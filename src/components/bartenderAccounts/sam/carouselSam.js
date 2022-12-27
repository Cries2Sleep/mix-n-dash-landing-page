import Carousel from "react-bootstrap/Carousel";
import { MDBCardImage } from "mdb-react-ui-kit";
export default function CarouselSam() {
    return (
        <Carousel interval={1500} fade>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/0t4bv71606854479.jpg"
                alt="John Collins"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">John Collins</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg"
                alt="Smashed Watermelon Margarita"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Smashed Watermelon Margarita</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg"
                alt="Absolutely Cranberry Smash"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Absolutely Cranberry Smash</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg"
                alt="Strawberry Daiquiri"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Strawberry Daiquiri</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}