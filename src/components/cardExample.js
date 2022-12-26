import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import mable from "../assets/img/testimonials-1.jpg";
import arch from "../assets/img/testimonials-2.jpg";
import beyonce from "../assets/img/testimonials-3.jpg";

export default function ExampleCards () {
    return (
        <>
            <Card
            className="col-md-3 shadow"
            // key={bartender.id}
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              variant="top"
              src={mable}
              alt="avatar"
              className="rounded-circle text-center"
              style={{
                width: "150px",
                margin: "10px auto",
                display: "block",
              }}
            />
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>
               Katie 
              </Card.Title>
              <Card.Text>
               Dallas, TX
              </Card.Text>
            </Card.Body>
            <Link
              className="btn btn-primary btn-md"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              to="/bartenders/katie"
              variant="primary"
            >
              View Profile
            </Link>
            <br />
          </Card>
          
          <Card
            className="col-md-3 shadow"
            // key={bartender.id}
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              variant="top"
              src={arch}
              alt="avatar"
              className="rounded-circle text-center"
              style={{
                width: "150px",
                margin: "10px auto",
                display: "block",
              }}
            />
            <Card.Body>
              <Card.Title>
               Sam
              </Card.Title>
              <Card.Text>
               Bryan, TX
              </Card.Text>
            </Card.Body>
            <Link
              className="btn btn-primary btn-md"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              to="/bartenders/sam"
              variant="primary"
            >
              View Profile
            </Link>
            <br />
          </Card>
          
          <Card
            className="col-md-3 shadow"
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card.Img
              variant="top"
              src={beyonce}
              alt="avatar"
              className="rounded-circle text-center"
              style={{
                width: "150px",
                margin: "10px auto",
                display: "block",
              }}
            />
            <Card.Body>
              <Card.Title>
               Jasmine
              </Card.Title>
              <Card.Text>
               Bryan, TX
              </Card.Text>
            </Card.Body>
            <Link
              className="btn btn-primary btn-md"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              to="/bartenders/jasmine"
              variant="primary"
            >
              View Profile
            </Link>
            <br />
          </Card>
        </>
    )
}