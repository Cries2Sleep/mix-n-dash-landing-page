import CarouselJasmine from "./carouselJasmine";
import jasmine from "../../../assets/img/testimonials-3.jpg";
import BackButton from "../BackButton";
// Card styles
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Jasmine() {
  return (
    <>
      <section>
      <BackButton/>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4" style={{ marginTop: "45px" }}>
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={jasmine}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <h2 className="mb-1" style={{ color: "black" }}>
                    Jasmine Leung
                  </h2>
                  <p> Houston, TX</p>
                  <p> Jasmine is a creative and innovative bartender with a passion for experimenting with different ingredients and flavors. She loves to come up with unique and unexpected combinations in her drinks. </p>
                  <p>Contact me at: jasmine.leung@gmail.com </p>
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
                                <td>Gin Sling</td>
                              </tr>
                              <tr >
                                <td>Whiskey Sour</td>
                              </tr>
                              <tr >
                                <td>Old Fashioned</td>
                              </tr>
                              <tr >
                                <td>Smut</td>
                              </tr>
                        </tbody>
                      </table>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <CarouselJasmine />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Jasmine;
