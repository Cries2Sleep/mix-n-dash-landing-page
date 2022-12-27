import CarouselSam from "./carouselSam";
import sam from "../../../assets/img/testimonials-2.jpg";
import BackButton from "../BackButton";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
  } from "mdb-react-ui-kit";

export default function Sam() {
    return(
        <>
        <section>
        <BackButton />
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4" style={{ marginTop: "45px" }}>
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={sam}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <h2 className="mb-1" style={{ color: "black" }}>
                      Sam Rodriguez
                    </h2>
                    <p> Bryan, TX</p>
                    <p> Sam is a laid-back bartender who's been in the industry for over 10 years. He's known for his easygoing personality and his ability to make any cocktail with ease.. </p>
                    <p>Contact me at: Sam.rodriguez@gmail.com </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard
                      className="mb-4 mb-md-0"
                      style={{ marginTop: "45px" }}
                    >
                      <MDBCardBody>
                        <table className="table table-striped text-center">
                          <thead>
                            <tr>
                              <th>Specialty Drinks</th>
                            </tr>
                          </thead>
                          <tbody>
                                <tr >
                                  <td>John Collins</td>
                                </tr>
                                <tr >
                                  <td>Smashed Watermelon Margarita</td>
                                </tr>
                                <tr >
                                  <td>Absolutely Cranberry Smash</td>
                                </tr>
                                <tr >
                                  <td>Cosmopolitan Martini</td>
                                </tr>
                          </tbody>
                        </table>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
  
                  <MDBCol md="6">
                    <CarouselSam />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    )
}