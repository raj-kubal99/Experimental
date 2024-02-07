import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Go back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;