import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ExampleCards from './cardExample';

function BartenderList() {
  return (
    <>       
    <div className="bartenderList">
    <Button
      style={{
        marginLeft: "5em",
        marginTop: "10px",
        backgroundColor: "#f8f3e9",
        color: "black",
        border: "none",
        fontSize: "14px",
      }}
    >
    <Link to={"/"}>Go back</Link>
    </Button>
      <header>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="mb-6 text-center text-white">
                <h1
                  className="mb-6 content1 text-outline"
                  style={{
                    color: "#f8f3e9",
                    textDecoration: "outline",
                    textDecorationColor: "black",
                  }}
                >
                  Here are some of our current bartenders!
                </h1>
                <br />
                <form
                  className="form-subscribe"
                >
                  <div className="row">
                    <div className="col">
                      {/* <input
                        icon="search"
                        placeholder="City"
                        type="text"
                        className="form-control form-control-md"
                      ></input> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <br />
      <div className="container">
        <div
          className="row"
          style={{
            margin: "0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ExampleCards />
        </div>
      </div>
    </div>
  </> 
  );
}
export default BartenderList;
