import CarouselKatie from "./carouselKatie";
import katie from "../../../assets/img/testimonials-1.jpg";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
  } from "mdb-react-ui-kit";

export default function Katie() {
    return(
        <>
        <section>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4" style={{ marginTop: "45px" }}>
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={katie}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <h2 className="mb-1" style={{ color: "black" }}>
                      Katie Rodriguez
                    </h2>
                    <p> Dallas, TX</p>
                    <p> Katie is a bubbly and energetic bartender who loves to create new and unique drinks for her customers. She has a particular talent for infusing different flavors into her cocktails. </p>
                    <p>Contact me at: katie.rodriguez@gmail.com </p>
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
                                  <td>Egg Cream</td>
                                </tr>
                                <tr >
                                  <td>Mango Majito</td>
                                </tr>
                                <tr >
                                  <td>Cherry Electric Lemonade</td>
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
                    <CarouselKatie />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    )
}