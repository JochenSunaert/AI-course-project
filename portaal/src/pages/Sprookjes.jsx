import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Longprojectlist from "../components/longprojectlist";
import Subnav from "../components/subnav";
import TextBlock from "../components/footerunder";
import { useState } from 'react'; 

function Sprookjes() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [selectedWriter, setSelectedWriter] = useState('All'); 

    return (
        <div className="home-container" style={{ backgroundColor: '#1D1D1B', minHeight: '100vh' }}>
            <Parallax pages={4.6} style={{ top: "0", left: "0" }}>
                <ParallaxLayer offset={0} speed={0.1} factor={1}>
                    <Subnav setSearchQuery={setSearchQuery} setSelectedWriter={setSelectedWriter} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={0.2}>
                    <Longprojectlist searchQuery={searchQuery} selectedWriter={selectedWriter} />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.2}>
                    <div className="animation-layer" id="parallax-01"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.3}>
                    <div className="animation-layer" id="parallax-02"></div>
                    <div className="footerfix-grey"> </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.6}>
                    <div className="animation-layer" id="parallax-03"></div>
                    <TextBlock className="sprookjesblok" />
                    <div className="footerfix-white"> </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Sprookjes;
