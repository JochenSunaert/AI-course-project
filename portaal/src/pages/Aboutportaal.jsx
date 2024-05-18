import{Parallax, ParallaxLayer} from "@react-spring/parallax";
import TextBlock from "../components/footerunder";
import Subnav from "../components/subnav";

function Home(){
    return (
        <div className="home-container" style={{ backgroundColor: '#1D1D1B', minHeight: '100vh' }}>
        <Parallax pages={1.8} style={{top:"0", left:"0"}}>
             <ParallaxLayer offset={0} speed={0.1} factor={1}>
                <Subnav/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.2}>
                <div className="animation-layer" id="parallax-01"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.3}>
                <div className="animation-layer" id="parallax-02"></div>
                <div className="footerfix-grey"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.6}>
                <div className="animation-layer" id="parallax-03"></div>
                <TextBlock/>
                <div className="footerfix-white"> </div>
            </ParallaxLayer>

        </Parallax>
        </div>
    )
}
export default Home;