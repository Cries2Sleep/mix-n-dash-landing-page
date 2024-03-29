import ExampleCards from './cardExample';

function BartenderList() {
  return (
    <>       
    <div className="bartenderList">
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
