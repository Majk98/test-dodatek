import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container">
            <h2>404 - stránka nenalezena</h2>
            <p>Omlouváme se, ale stránka, kterou hledáš, neexistuje</p>
            <Link to="/" className="cta-button">Zpět na domovskou stránku.</Link>

        </div>




    )
}

export default ErrorPage;
