import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './App.css';
import AppLayout from './components/AppLayout';
import RoomsCalendar from './components/RoomsCalendar';

function App() {
	return (
		<div className="App">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<AppLayout>
					<RoomsCalendar />
				</AppLayout>
			</LocalizationProvider>
		</div>
	);
}

export default App;
