import Carousel from "react-bootstrap/Carousel";
import { MDBCardImage } from "mdb-react-ui-kit";
export default function CarouselKatie() {
    return (
        <Carousel interval={1500} fade>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg"
                alt="Egg Cream"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Egg Cream</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/wfqmgm1630406820.jpg"
                alt="Mango Mojito"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Mango Mojito</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/tquyyt1451299548.jpg"
                alt="Cherry Electric Lemonade"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Cherry Electric Lemonade</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <MDBCardImage
                className="d-block w-100"
                src="https://www.thecocktaildb.com/images/media/drink/upxxpq1439907580.jpg"
                alt="Cosmopolitan Martini"
                style={{
                width: "500px",
                height: "500px",
                objectFit: "contain",
                }}
            />
            <Carousel.Caption>
                <h3 className="text-outline">Cosmopolitan Martini</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}