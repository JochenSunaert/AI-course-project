import { Outlet, Link } from "react-router-dom";
function TextBlock(){
    return (
        <footer>
        <div className="footercontainer container" >
            <img src="logo_portaal_rood.png"></img>
            <h2>about us</h2>
            <p>Ontdek de sprookjes van onze Erasmushogeschool Brussel's FRONT END studentenproject!<br/>Samen bouwen we aan  boeiende sprookjeswebsites, waarin elk verhaal tot leven komt.<br/> Verlies jezelf in ons portaal van betovering en creativiteit!</p>
            <h2>ga naar</h2>
            <div className="footer-navbar">
                <Link to='/about' className="nav-link" >About us</Link>
                <Link to='/sprookjes' className="nav-link" >Sprookjes</Link>
                <Link to='/making' className="nav-link" >Making of</Link>
            </div>
        </div>
        <h5>website by Jochen Sunaert</h5>
    </footer>
    )
}
export default TextBlock;