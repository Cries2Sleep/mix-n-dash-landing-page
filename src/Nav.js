import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Logo from "./assets/img/mixndashlogo.png";
// import LoginModal from "./accountComponents/loginModal";
// import UserSignupModal from "./accountComponents/accountSignupModal";
// import { useGetTokenQuery } from "./store/accountsApi";
import { useNavigate } from "react-router-dom";
// import LogoutModal from "./accountComponents/logoutModal";

function Nav() {
  // const { data: tokenData } = useGetTokenQuery();
  const navigate = useNavigate();

  // if (!tokenData) {
  //   return (
  //     <>
  //       <nav className="navbar navbar-expand-sm navbar-dark bg-black">
  //         <div className="container-fluid">
  //           <NavLink className="navbar-brand" to="/">
  //             <img src={Logo} width="125px" alt="Logo" />
  //           </NavLink>
  //           <button
  //             className="navbar-toggler"
  //             type="button"
  //             data-bs-toggle="collapse"
  //             data-bs-target="#navbarSupportedContent"
  //             aria-controls="navbarSupportedContent"
  //             aria-expanded="false"
  //             aria-label="Toggle navigation"
  //           >
  //             <span className="navbar-toggler-icon" />
  //           </button>
  //           <div
  //             className="collapse navbar-collapse"
  //             id="navbarSupportedContent"
  //           >
  //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //               <li className="nav-item">
  //                 <LoginModal />
  //               </li>
  //               <li className="nav-item">
  //                 <UserSignupModal className="dropdown-item" />
  //               </li>
  //               <li className="nav-item">
  //                 <Button
  //                   className="dropdown-item nav-item"
  //                   style={{ color: "#F4EBD0" }}
  //                   onClick={() => navigate("/bartenders")}
  //                 >
  //                   Bartenders
  //                 </Button>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //     </>
  //   );
  // } else {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-black">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} width="125px" alt="Logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <LogoutModal /> */}
                </li>
                <li className="nav-item">
                  {/* <UserSignupModal className="dropdown-item" /> */}
                </li>
                <li className="nav-item">
                  <Button
                    className="dropdown-item nav-item"
                    style={{ color: "#F4EBD0" }}
                    onClick={() => navigate("/account/detail")}
                  >
                    Account Detail
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="dropdown-item nav-item"
                    style={{ color: "#F4EBD0" }}
                    onClick={() => navigate("/bartenders")}
                  >
                    Bartenders
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  // }
}

export default Nav;
