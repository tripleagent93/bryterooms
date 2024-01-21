import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import RoomsCalendar from './components/RoomsCalendar';

function App() {
	return (
		<div className="App">
			<Router>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<AppLayout>
						<RoomsCalendar />
					</AppLayout>
				</LocalizationProvider>
			</Router>
		</div>
	);
}

export default App;
