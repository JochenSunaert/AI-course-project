import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Animation from "../components/animation";
import LazyLoad from "react-lazyload";

function Repelsteeltje() {

    const [style, setStyle] = useState('Formal');
    const [text, setText] = useState('Er was eens...');
    const [styledText, setStyledText] = useState('');
    const [error, setError] = useState('');

    const handleStyleChange = (event) => {
        setStyle(event.target.value);
    };
	const applyStyle = async () => {
		setError('');  // Reset any previous error
		try {
			const response = await fetch('http://localhost:3001/generate-text', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt: text, style, model: 'gpt-3.5-turbo' })
			});
	
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Error generating text');
			}
	
			const responseData = await response.json();
			console.log('Response data:', responseData); // Log the response data
	
			const styledMessage = responseData.choices[0].message;
			console.log('Styled message:', styledMessage);
			setStyledText(styledMessage.content || 'No styled text found3');
		} catch (error) {
			console.error('Error:', error);
			setError(error.message);
		}
	};


	return (
		<div className="repelsteeltje-container">
			<Parallax pages={9.2} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={0} factor={1}>
					<div className="fsanimation-layer" id="scene-1-1"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.05} factor={1}>
					<div className="fsanimation-layer" id="scene-1-2"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.1} factor={1}>
					<div className="fsanimation-layer" id="scene-1-3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.15} factor={1}>
					<div className="fsanimation-layer">
						<h1>Repelsteeltje</h1>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.2} factor={1}>
					<div className="fsanimation-layer" id="scene-1-4"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.25} factor={1}>
					<div className="fsanimation-layer" id="scene-1-5"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.3} factor={1}>
					<div className="fsanimation-layer" id="scene-1-6"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.35} factor={1}>
					<div className="fsanimation-layer" id="scene-1-7"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.45} factor={1}>
					<div className="fsanimation-layer" id="scene-1-8"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5} factor={1}>
					<div className="fsanimation-layer" id="scene-1-9"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.55} factor={1}>
					<div className="fsanimation-layer" id="scene-1-10"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6} factor={1}>
					<div className="fsanimation-layer" id="scene-1-11"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6} factor={1}>
				<div className="repelsteeltje-container">
            <div className="text-styling">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here..."
                ></textarea>
                <select value={style} onChange={handleStyleChange}>
                    <option value="Formal">Formal</option>
                    <option value="Informal">Informal</option>
                    <option value="Fairy Tale">Fairy Tale</option>
                </select>
                <button onClick={applyStyle}>Apply Style</button>
                {error && <p className="error">{error}</p>}
            </div>
            <div className="styled-text">
                {styledText && <p>{styledText}</p>}
            </div>
        </div>
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={0}>
					<div className="fsanimation-layer" id="scene-2-1"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.1}>
					<div className="fsanimation-layer" id="scene-2-2"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.15}>
					<div className="fsanimation-layer" id="scene-2-3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.2}>
					<div className="fsanimation-layer" id="scene-2-4"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.25}>
					<div className="fsanimation-layer" id="scene-2-5"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={0.3}>
					<div className="fsanimation-layer" id="scene-2-7"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.35}>
					<div className="fsanimation-layer" id="scene-2-8"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.4}>
					<div className="fsanimation-layer" id="scene-2-9"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.45}>
					<div className="fsanimation-layer" id="scene-2-10"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.5}>
					<div className="fsanimation-layer" id="scene-2-11"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} speed={0.5}>
					<div className="fsanimation-layer" id="people"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={4.1} speed={0} factor={1}>
					<div className="fsanimation-layer" id="scene-3-1"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.15} factor={1}>
					<div className="fsanimation-layer" id="scene-3-3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.25} factor={1}>
					<div className="fsanimation-layer" id="scene-3-4"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.3} factor={1}>
					<div className="fsanimation-layer" id="scene-3-5"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.4} factor={1}>
					<div className="fsanimation-layer" id="scene-3-7"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.45} factor={1}>
					<div className="fsanimation-layer" id="scene-3-8"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.5} factor={1}>
					<div className="fsanimation-layer" id="scene-3-9"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.6} factor={1}>
					<div className="fsanimation-layer" id="scene-3-11"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.1} speed={0.65} factor={1}>
					<div className="fsanimation-layer" id="scene-3-12"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={8.4} speed={0} factor={1}>
					<div className="fsanimation-layer" id="scene-3-1"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.15} factor={1}>
					<div className="fsanimation-layer" id="scene-3-3"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.15} factor={1}>
					<div className="fsanimation-layer eindelayer">
						<h1>Einde</h1>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.25} factor={1}>
					<div className="fsanimation-layer" id="scene-3-4"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.3} factor={1}>
					<div className="fsanimation-layer" id="scene-3-5"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.4} factor={1}>
					<div className="fsanimation-layer" id="scene-3-7"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.45} factor={1}>
					<div className="fsanimation-layer" id="scene-3-8"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.5} factor={1}>
					<div className="fsanimation-layer" id="scene-3-9"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.6} factor={1}>
					<div className="fsanimation-layer" id="scene-3-11"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.65} factor={1}>
					<div className="fsanimation-layer" id="scene-3-12"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.4} speed={0.15} factor={1}>
					<div className="fsanimation-layer terugportaal ">
						<Link to="/" className="nav-link">
							<h1>Terug naar portaal</h1>
						</Link>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={0.6} speed={0.65} factor={0.3}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.6} speed={0.7} factor={0.3}>
					<div className="animation-layer" id="parallax-02"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0.6} speed={0.75} factor={0.3}>
					<div className="animation-layer" id="parallax-03"></div>
					<div className="footerfix-white-long"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={1.2} speed={0} factor={0.3}>
					<div class="sprookjestext">
						<h2>
							Er was eens... <br />
							<br />
						</h2>
						<p>
							in een wereld ver weg van hier, waar de wind zong door de toppen
							van eeuwenoude bomen,
							<br />
							een gezin dat zijn bestaan vond tussen de wiegende velden en de
							draaiende wieken van een molen.
							<br />
							De molenaar, een man van eenvoud en arbeid, deelde zijn dagen met
							zijn dochter,
							<br />
							een jonge vrouw wiens schoonheid net zo stralend was als het
							gouden koren dat ze hielp malen. <br />
							Samen bewerkten ze het land en deelden ze momenten van vreugde te
							midden van de rust van hun bescheiden boerderij.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1.8} speed={0.05} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={0.1} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={0.15} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-03"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.65} factor={0.3}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={2.6} speed={0.7} factor={0.3}>
					<div className="animation-layer" id="parallax-02"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.75} factor={0.3}>
					<div className="animation-layer" id="parallax-03"></div>
					<div className="footerfix-white-long"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={3.1} speed={0.1} factor={1}>
					<div class="sprookjestext">
						<p>
							Het meisje wou wat vertellen aan haar vader. <br />
							<br />
						</p>
						<div class="sprookjesdiv">
							<div class="textmeisje">
								<img src="meisje.png"></img>
								<p>
									"Vader, <br />
									ik geloof dat ik iets kan wat de mensen versteld zal doen
									staan.
									<br />
									Ik kan goud spinnen, vader. Echt goud!"
								</p>
							</div>
							<div class="textvader">
								<img src="vader.png"></img>
								<p>
									{" "}
									"Dat is erg speciaal mijn dochter, <br />
									Ik moet dit vertellen aan de prins, zodat je <br />
									met hem kan trouwen."
								</p>
							</div>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={3.9} speed={0.15} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={3.9} speed={0.1} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={3.9} speed={0.05} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-03"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={4.7} speed={0.65} factor={0.3}>
					<div className="animation-layer" id="parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={4.7} speed={0.7} factor={0.3}>
					<div className="animation-layer" id="parallax-02"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={4.7} speed={0.75} factor={0.3}>
					<div className="animation-layer" id="parallax-03"></div>
					<div className="footerfix-white-long"></div>
				</ParallaxLayer>

				<ParallaxLayer offset={5.1} speed={0} factor={0.3}>
					<div class="sprookjestext koningwrap">
						<div class="sprookjesdiv koningdiv">
							
							<img src="koning.png"></img>
							<p>
								"Bewijs jouzelf dat je goud kan spinnen, en alleen als je dit
								kan zal en wil ik met je trouwen."
							</p>
						</div>
						<div class="sprookjesdiv koningdiv sprookjestextdiv">
							<p>
								Al snel had de dochter spijt dat ze dit had vertelt, want ze kan
								natuurlijk geen goud spinnen. totdat er iemand mysterieus
								tevoorschijn kwam.{" "}
							</p>
						</div>
						<div class="sprookjesdiv koningdiv repelsteeltjediv">
							<p>
								"Ik kan goud spinnen voor jouw, maar daar is een catch achter.
								ik doe dit alleen in ruil voor jouw eerste kind."
							</p>
							<Animation/>
						</div>
						<div class="sprookjesdiv koningdiv sprookjestextdiv">
							<p>
								De man spon goud voor de dochter in ruil voor hun eerste kind.
								De koning en de dochter trouwden samen. ze kregen een kindje. De koning stuurt jouw op om zijn naam te achterhalen!<br/><br/>
								<mark>Quest: Hover over De mysterieuse man voor zijn naam te achterhalen</mark>


							</p>
							 
							<p>
								
							</p>
						</div>
						<div class="sprookjesdiv koningdiv koningmeisjediv">
							<img src="koningmeisje.png"></img>
							<p>
								 Na erg veel nadenken hebben wij het gevonden! Jouw naam is repelsteeltje!
							</p>
						</div>
						
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={8.1} speed={0.05} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-01"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.1} speed={0.05} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-02"></div>
				</ParallaxLayer>
				<ParallaxLayer offset={8.1} speed={0.05} factor={0.3}>
					<div className="animation-layer" id="rev-parallax-03"></div>
				</ParallaxLayer>
			</Parallax>

        </div>		
	);
}
export default Repelsteeltje;
