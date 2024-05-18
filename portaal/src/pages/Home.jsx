import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "../components/footerunder";
import Projectlist from "../components/projectlist";
import Nav from "../components/Nav";
import Animation from '../components/animation';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedWriter, setSelectedWriter] = useState('All');

  return (
    <div className="home-container" style={{ backgroundColor: '#1D1D1B', minHeight: '100vh' }}>
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
        <Nav setSearchQuery={setSearchQuery} setSelectedWriter={setSelectedWriter} />
        </ParallaxLayer>
        <ParallaxLayer className="projectlist" offset={0.7} speed={0.2}>
          <Projectlist searchQuery={searchQuery} selectedWriter={selectedWriter}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.2}>
          <div className="animation-layer" id="parallax-01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.3}>
          <div className="animation-layer" id="parallax-02"></div>
          <div className="footerfix-grey"> </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.6}>
          <div className="animation-layer" id="parallax-03"></div>
          <TextBlock />
          <div className="footerfix-white"> </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
