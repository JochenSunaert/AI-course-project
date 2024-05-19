import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Outlet, Link } from "react-router-dom";
import Animation from "../components/animation";
import LazyLoad from "react-lazyload";

function Repelsteeltje() {
    const [style, setStyle] = useState('Formeel');
    const [text, setText] = useState('Er was eens...');
    const [styledText, setStyledText] = useState('');
    const [error, setError] = useState('');

    const initialFixedPromptTexts = ['', '', '', '', '', '', '', ''];
    const [fixedPromptTexts, setFixedPromptTexts] = useState(initialFixedPromptTexts);
    const [language, setLanguage] = useState(''); 


	const fixedPrompts = [
		`
		${language}
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
        Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. PAS GEEN REGELLIJNEN HOOGTES AAN. houd ermee rekening dat het altijd over een man en zijn dochter gaat. jouw text moet altijd beginnen met een <p> en eindigen op </p>
		look at the language provided. if 'de' talk german, if NL talk dutch if FR talk french and if EN talk english

        <p lang="${language}">
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

		remember to always respect the provided language in your response.
        `,
		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
        behoud deze text, maar Verander deze tekst zodat hij anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het tekstje gaat over een dochter die tegen haar vader praat. het gaad altijd over goud. jouw text moet altijd beginnen met een <p> en eindigen op </p>
		schrijf nooit andere speciale tekens zoals backticks.
		always respect the provided language in your response.

		<p lang="${language}">
			"Vader, <br />
			ik geloof dat ik iets kan wat de mensen versteld zal doen
			staan.
			<br />
			Ik kan goud spinnen, vader. Echt goud!"
		</p>
        `,
		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
        behoud deze text, maar Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen.. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het tekstje gaat over een vader die tegen haar dochter praat. jouw text moet altijd beginnen met een <p> en eindigen op </p>
		schrijf nooit andere speciale tekens zoals backticks.

		<p lang="${language}">	
			"Dat is erg speciaal mijn dochter, <br />
			Ik moet dit vertellen aan de prins, zodat je <br />
			met hem kan trouwen."
		</p>
        `,
		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
		behoud altijd de html structuur. je mag deze NOOIT veranderen. en stuur deze terug.
		Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het eerste tekstje gaat over een prins die tegen de molenaars dochter praat.
		Het tekstje gaat altijd over goud!
		de texten die jij verandert begint met een <p> en eindigen op </p>, doe nooit iets anders met de html.
		schrijf nooit andere speciale tekens zoals backticks.
					
		<p lang="${language}">
			"Bewijs jouzelf dat je goud kan spinnen, en alleen als je dit
			kan zal en wil ik met je trouwen."
		</p>
		`,
		`								
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
		behoud altijd de html structuur. je mag deze NOOIT veranderen. en stuur deze terug.
		Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		houd ermee rekening dat dit verhaaltje word vertelt door de verteller.
		de texten die jij verandert begint met een <p> en eindigen op </p>, doe nooit iets anders met de html.
		het tekstje gaad altijd over goud!
		schrijf nooit andere speciale tekens zoals backticks.
										
		de texten die jij verandert begint met een <p> en eindigen op </p>
			<p lang="${language}">
				Al snel had de dochter spijt dat ze dit had vertelt, want ze kan
				natuurlijk geen goud spinnen. totdat er iemand mysterieus
				tevoorschijn kwam.
			</p>`
		,
		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
		behoud altijd de html structuur. je mag deze NOOIT veranderen. en stuur deze terug.
		Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het tekstje gaat over repelsteeltje die praat tegen de molenaarsdochter.
		het gaat altijd over goud!
		
		de texten die jij verandert begint met een <p> en eindigen op </p>, doe nooit iets anders met de html.
		schrijf nooit backticks
		
		
		<p lang="${language}">
			"Ik kan goud spinnen voor jouw, maar daar is een catch achter.
			ik doe dit alleen in ruil voor jouw eerste kind."
		</p>`
		,
		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
		behoud altijd de html structuur. je mag deze NOOIT veranderen. en stuur deze terug.
		Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het van het perspectief van een verteller komt.
		
		de texten die jij verandert begint met een <p> en eindigen op </p>, De quest is in de <mark> tag. VERANDER NOOIT IETS ANDERS MET HTML OF CSS
		
		
		<p lang="${language}">
			De man spon goud voor de dochter in ruil voor hun eerste kind.
			De koning en de dochter trouwden samen. ze kregen een kindje. De koning stuurt jouw op om zijn naam te achterhalen!<br /><br />
			<mark>Quest: Hover over De mysterieuse man voor zijn naam te achterhalen</mark>
		</p>`,

		`
		RESPOND IN THE GIVEN LANGUAGE. YOU MUST ALWAYS LOOK AT THE LANGUAGE PROVIDED AND RESPECT IT AND ANSWER IN THAT LANGUAGE.
		behoud altijd de html structuur. je mag deze NOOIT veranderen. en stuur deze terug.
		Verander deze tekst zodat hij helemaal anders is. doe dit zonder de context te veranderen. maak het in de stijl die is meegegeven.
		VOEG NOOIT CSS TOE. houd ermee rekening dat het eerste tekstje gaat over een prins die tegen repelsteeltje praat.
	
		schrijf nooit backticks
		de texten die jij verandert begint met een <p> en eindigen op </p>, VERANDER NOOIT IETS ANDERS MET HTML OF CSS
	
		<p lang="${language}">
			Na erg veel nadenken hebben wij het gevonden! Jouw naam is repelsteeltje!
		</p>`
	];

	const handleStyleChange = (event) => {
        setStyle(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

	const generateText = async (prompt, index = null, language = '') => {
		try {
			const response = await fetch('http://localhost:3001/generate-text', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt, style, model: 'gpt-4o', language })
			});
	
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Error generating text');
			}
	
			const responseData = await response.json();
			const styledMessage = responseData.choices[0].message.content || 'No styled text found';
	
			if (index === null) {
				setStyledText(styledMessage);
			} else {
				setFixedPromptTexts(prev => {
					const newTexts = [...prev];
					newTexts[index] = styledMessage;
					return newTexts;
				});
			}
		} catch (error) {
			console.error('Error:', error);
			setError(error.message);
		}
	};

    const applyStyle = async () => {
        setError('');  
        await generateText(text, null, language);
        for (let i = 0; i < fixedPrompts.length; i++) {
            await generateText(fixedPrompts[i], i, language);
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

				<ParallaxLayer offset={0} speed={0.9} factor={1} class="gridcontainerai">
				<div className="repelsteeltje-container aicontainer">
                        <div className="text-styling">
						<p>choose a style</p>
                            <select value={style} onChange={handleStyleChange}>
								
                                <option value="Formeel">Formeel</option>
                                <option value="Informeel">Informeel</option>
                                <option value="sprookjesstijl">sprookje</option>
                            </select>
							<p>choose a language</p>
                            <select value={language} onChange={handleLanguageChange}>
								<option value="en">English</option>
            					<option value="fr">Français</option>
           						 <option value="nl">Nederlands</option>
            					<option value="de">Deutsch</option>
                            </select>
                            <button onClick={applyStyle}>Apply Style</button>
							<p>Don't see texts? - apply a style!</p>
                            {error && <p className="error">{error}</p>}
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
						<div className="fixedPromptDiv">
							<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[0] }}></div>
						</div>




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

						<div class="sprookjesdiv">
							<div class="textmeisje">
								<img src="meisje.png"></img>
								<div className="fixedPromptDiv">
									<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[1] }}></div>
								</div>
							</div>
							<div class="textvader">
								<img src="vader.png"></img>
								<div className="fixedPromptDiv">
									<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[2] }}></div>
								</div>
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
							<div className="fixedPromptDiv">
								<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[3] }}></div>
							</div>
						</div>
						<div class="sprookjesdiv koningdiv sprookjestextdiv">
							<p>
								<div className="fixedPromptDiv">
									<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[4] }}></div>
								</div>
							</p>
						</div>
						<div class="sprookjesdiv koningdiv repelsteeltjediv">
							<div className="fixedPromptDiv">
								<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[5] }}></div>
							</div>
							<Animation />
						</div>
						<div class="sprookjesdiv koningdiv sprookjestextdiv">
							<div className="fixedPromptDiv">
								<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[6] }}></div>
							</div>

							<p>

							</p>
						</div>
						<div class="sprookjesdiv koningdiv koningmeisjediv">
							<img src="koningmeisje.png"></img>
							<div className="fixedPromptDiv">
								<div dangerouslySetInnerHTML={{ __html: fixedPromptTexts[7] }}></div>
							</div>
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
