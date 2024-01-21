import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

function RoomsCalendar() {
	const [date, setDate] = useState<Dayjs | null>(
		dayjs(new Date().toLocaleDateString('en-CA'))
	);

	// const [code, setCode] = useState<string>('');

	// const code = queryParameters.get('code');

	// console.log('code', code);

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			'https://api.planningcenteronline.com/oauth/authorize?client_id=4d16b452f211191a3a92d5f8579caef561dfd759148f1f096921c845ec97337d&redirect_uri=https://tripleagent93.github.io&response_type=code&scope=calendar'
	// 		)
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	const columns = [
		'7AM',
		'8AM',
		'9AM',
		'10AM',
		'11AM',
		'12PM',
		'1PM',
		'2PM',
		'3PM',
		'4PM',
		'5PM',
		'6PM',
		'7PM',
		'8PM',
		'9PM',
		'10PM',
	];

	const rows = [
		'112 - Kids Room',
		'103 - Meeting Room',
		'113 - Kids Room',
		'115 - Kids Room',
		'201/203 - Classroom',
		'202 Youth Room',
		'204 - Classroom',
		'205/207 - Classroom',
		'208 - Classroom',
		'210 - Classroom',
		'211 - Classroom',
		'213/215 - Classroom',
		'Brothers Room',
		'Choir Room',
		'Gym',
		'Kitchen',
		'Sanctuary',
		'Solano Kitchen',
		'Solano Mission Room',
		'Solano Sanctuary',
		'Solano Studio',
		'Video Studio',
	];

	return (
		<>
			<TableContainer component={Paper} sx={{ maxWidth: 1488 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: '#f3f3f3' }}>
						<TableRow>
							<Box sx={{ py: 2 }}>
								<DatePicker
									label="Date"
									value={date}
									onChange={(newValue) => setDate(newValue)}
								/>
							</Box>
							{columns.map((colName) => {
								return (
									<TableCell
										align="right"
										sx={{ fontWeight: 'bold' }}
									>
										{colName}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableRow
								key={index}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell scope="row">{row}</TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
								<TableCell scope="row"></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
export default RoomsCalendar;
