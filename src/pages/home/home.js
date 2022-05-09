const dataCard = ['uno', 'dops', 'tres', 'cuantro'];

const Home = () => {
	return (
		<div class='container home'>
			<div class='row'>
				{dataCard.map((data, i) => (
					<div class='col-12 col-md-6 c-card-content'>
						<div className='c-card'></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
