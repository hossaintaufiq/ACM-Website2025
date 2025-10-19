const Footer = () => {
	return (
		<>
			{' '}
			<br />
			<br />
			<footer id="footer" className="theme-clr">
				<div className="footer-top theme-clr">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 footer-contact">
								<h3 style={{ color: 'rgb(221, 221, 221)' }}>
									NSU <span style={{ color: '#ffffff' }}>ACM SC</span>
								</h3>
								<p style={{ color: 'white' }}>
									The First Student Chapter <br />
									Of{' '}
									<strong>
										The Association For Computing <br />
										Machineries
									</strong>
									In Bangladesh.
								</p>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4 style={{ color: 'rgb(158, 158, 158)' }}>Useful Links</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="https://www.acm.org/education/" target="_blank" rel="noopener noreferrer">
											ACM Education
										</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="https://www.acm.org/publications/digital-library/" target="_blank" rel="noopener noreferrer">
											ACM Digital Library
										</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="https://www.acm.org/code-of-ethics/" target="_blank" rel="noopener noreferrer">
											ACM Code of Ethics
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<br />
								<br />
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="http://www.northsouth.edu/" target="_blank" rel="noopener noreferrer">
											NSU Website
										</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="http://ece.northsouth.edu/" target="_blank" rel="noopener noreferrer">
											NSU ECE Website
										</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="about.html" target="_blank" rel="noopener noreferrer">
											About US
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4 style={{ color: 'rgb(158, 158, 158)' }}>Our Social Networks</h4>
								<p style={{ color: '#FFFFFF' }}>
									Get the latest updates from our
									<br />
									social profiles!
								</p>
								<div className="social-links mt-3">
									<a href="https://www.linkedin.com/company/nsuacmc/" target="_blank" rel="noopener noreferrer" className="linkedin">
										<i className="bx bxl-linkedin"></i>
									</a>
									<a href="https://github.com/NSU-ACM-SC/" target="_blank" rel="noopener noreferrer" className="github">
										<i className="bx bxl-github"></i>
									</a>
									<a href="https://tinyurl.com/y228boc9/" target="_blank" rel="noopener noreferrer" className="youtube">
										<i className="bx bxl-youtube"></i>
									</a>
									<a href="https://www.facebook.com/nsuacmc/" target="_blank" rel="noopener noreferrer" className="facebook">
										<i className="bx bxl-facebook"></i>
									</a>
									<a href="https://medium.com/nsuacmsc/" target="_blank" rel="noopener noreferrer" className="medium">
										<i className="bx bxl-medium"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container py-4" style={{ color: '#ffffff' }}>
					<div className="copyright">
						&copy; Copyright{' '}
						<strong>
							<span>NSU ACM SC</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className="credits" style={{ color: '#d96cbe' }}>
						Developed by <a href="web-team.html">NSU ACM SC Web Team</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
