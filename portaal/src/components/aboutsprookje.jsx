import{Parallax, ParallaxLayer} from "@react-spring/parallax";
import Textblock from "./footerunder";
import Nav from "./Nav";
import Longprojectlist from "./longprojectlist";
import Subnav from "./subnav";
import '../App.css'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Aboutsprookje() {


  return (
    <>  
    <h2 class="titletext">Making of</h2>
    <div class="container">
        <Link to='/repelsteeltje' class="makingimg"  ><h1>Repelsteeltje</h1></Link>

        <div class="author"><div>By <strong>Jochen Sunaert</strong></div></div>
        <div class="makingtext">
            <p><strong>Watch: Repelsteeltje - Making of!</strong></p>
            <div class="aboutgrid">
                <img class="videoabout" src='repelsteeltje1.png'></img>
                <div>
                    <p><strong>Descriptie</strong></p>
                    <p>Mijn toegepaste technieken!</p>
                    <p>een zinnetje voor mijn video descriptie</p>
                    <p>een tweede zinnetje die mijn video beschrijft.</p>
                </div>
            </div>
            <div class="makingpt2">
                <p><strong>Extra beeldmateriaal</strong></p>
                <div class="makingpt2grid">
                    <img src='repelsteeltje-1.png'></img>
                    <img src='repelsteeltje-2.png'></img>
                    <img src='repelsteeltje-4.png'></img>
                </div>
            </div>
            <img class="bottomclouds" src='aboutclouds.png'></img>
        </div>

    </div>

    
    </>
  )
}
 
export default Aboutsprookje
