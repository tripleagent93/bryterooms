import './App.css';
import AppLayout from './components/AppLayout';
import RoomsCalendar from './components/RoomsCalendar';

function App() {
	return (
		<div className="App">
			<AppLayout>
				<RoomsCalendar />
			</AppLayout>
		</div>
	);
}

export default App;
