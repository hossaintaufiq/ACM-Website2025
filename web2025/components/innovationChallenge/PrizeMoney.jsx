const PrizeMoney = () => {
	return (
		<>
			<section>
				<div className="section-ttl">
					<h2 className="linear-wipe">Prize Money</h2>
				</div><br/><br/>
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div id="center" className="col-md-6 d-flex flex-column align-items-center card mt-auto">
							<h1 style={{ fontFamily: "'Good Times Rg', sans-serif", color: 'rgb(0, 0, 0)', margin: "auto auto" }}>General Category</h1>
							<div className="d-flex flex-column align-items-center mt-5">
								<p>The Champion - 10K BDT</p>
								<p>
									1<sup>st</sup> Runner Up - 7K BDT
								</p>
								<p>
									2<sup>nd</sup> Runner Up - 5K BDT
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PrizeMoney;
