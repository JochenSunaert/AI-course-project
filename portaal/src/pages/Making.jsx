import{Parallax, ParallaxLayer} from "@react-spring/parallax";
import Subnav from "../components/subnav";
import TextBlock from "../components/footerunder";
import Aboutsprookje from "../components/aboutsprookje";


function Making(){
    return (
        <div className="home-container" style={{ backgroundColor: '#1D1D1B', minHeight: '100vh' }}>
        <Parallax pages={3.6} style={{top:"0", left:"0"}}>
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
           <Subnav/>
       </ParallaxLayer>
       <ParallaxLayer offset={0.5} speed={0.2}>
           <Aboutsprookje/>
       </ParallaxLayer>
       <ParallaxLayer offset={2} speed={0.2}>
           <div className="animation-layer" id="parallax-01"></div>
       </ParallaxLayer>
       <ParallaxLayer offset={2} speed={0.3}>
           <div className="animation-layer" id="parallax-02"></div>
           <div className="footerfix-grey"> </div>
       </ParallaxLayer>
       <ParallaxLayer offset={2} speed={0.6}>
           <div className="animation-layer" id="parallax-03"></div>
           <TextBlock className="sprookjesblok"/>
           <div className="footerfix-white"> </div>
       </ParallaxLayer>
       

   </Parallax>
   </div>
    )
}

export default  Making;