import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<title>Profile List!</title>
			</Head>
			<Component />
		</>
	);
};

export default App;
