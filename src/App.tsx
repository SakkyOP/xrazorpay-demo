import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
	return (
		<div className="flex justify-center w-full min-h-screen h-full bg-rich_black text-white">
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
