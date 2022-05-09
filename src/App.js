import Landing from './landing/landing';
import Layout from './layout/layout';
import Home from './pages/home/home';
import './pages/home/home.css';
import Header from './shared/header/header';
const dataCard = ['uno', 'dops', 'tres', 'cuantro'];

let home = () => {
	if (window.location.pathname === '/') return true;
	else return false;
};

console.log(home());
function App() {
	return (
		<Layout header={<Header />} landing={home() && <Landing />}>
			<Home />
		</Layout>
	);
}

export default App;
