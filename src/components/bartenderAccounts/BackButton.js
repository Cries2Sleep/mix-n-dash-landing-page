import { Link } from "react-router-dom";

export default function backButton() {
    return (
    <Link
        className="btn btn-primary btn-md"
        // used to include disabled in className
        style={{ 
            marginLeft: "5em",
            marginTop: "10px",
            backgroundColor: "#f8f3e9",
            color: "black",
            border: "none",
            fontSize: "14px"
            }}
        to="../"
    >
        Go back
    </Link>)
}