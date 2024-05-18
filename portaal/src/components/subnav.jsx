import { useState } from "react";
import { Link } from "react-router-dom";

function Subnav({ setSearchQuery, setSelectedAuthor }) {
	const [searchInput, setSearchInput] = useState("");

	const handleSearch = (e) => {
		e.preventDefault(); 
		console.log("Search Input:", searchInput);
		setSearchQuery(searchInput);
		console.log("Search Query:", searchInput); 
	};

	return (
		<>
			<nav className="subnavbar">
				<div className="container">
					<div className="navbar-left">
						<Link to="/" className="sub-nav-link">
							<Link to="/">
								<i className="fa-solid fa-arrow-left"></i>
							</Link>
							<img
								src="logo_portaal_rood.png"
								alt="Portal Logo"
							></img>
						</Link>
					</div>
					<div className="navbar-right">
						<Link to="/about" className="nav-link">
							About us
						</Link>
						<Link to="/sprookjes" className="nav-link">
							Sprookjes
						</Link>
						<Link to="/making" className="nav-link">
							Making of
						</Link>
					</div>
				</div>
			</nav>
			<div className="headerimg subheaderimg">
				<div className="z-indexfix">
					<form onSubmit={handleSearch}>
						<div className="search-container">
							<div className="search-input">
								<i className="fas fa-search"></i>
								<input
									type="text"
									placeholder="Zoek hier naar een sprookje of een persoon"
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
								/>
							</div>
							<button
								type="submit"
								className="search-btn"
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
			<img
				src="cloud_transition.png"
				className="clouds-overlay"
				alt="Clouds Overlay"
			/>
		</>
	);
}

export default Subnav;
