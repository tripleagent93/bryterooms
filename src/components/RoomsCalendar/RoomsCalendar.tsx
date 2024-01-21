import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

function RoomsCalendar() {
	const [date, setDate] = useState<Dayjs | null>(
		dayjs(new Date().toLocaleDateString('en-CA'))
	);

	const [code, setCode] = useState<string | undefined>();
	const [accessToken, setAccessToken] = useState<string | undefined>();

	useEffect(() => {
		const queryParameters = new URLSearchParams(window.location.search);
		if (queryParameters.has('code')) {
			setCode(queryParameters.get('code') ?? undefined);
		}
	}, []);

	useEffect(() => {
		if (code) {
			axios
				.post(
					`https://api.planningcenteronline.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=4d16b452f211191a3a92d5f8579caef561dfd759148f1f096921c845ec97337d&client_secret=ea32b02c65e4fb51415063b77168f1c611137b77b5f445f6d85ac2a00834e893&redirect_uri=https://tripleagent93.github.io`
				)
				.then((response) => {
					console.log('token: ', response.data.access_token);
					setAccessToken(response.data.access_token);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [code]);

	useEffect(() => {
		if (accessToken) {
			axios
				.get(
					`https://api.planningcenteronline.com/calendar/v2/resource_bookings?where[starts_at]=${
						date?.toISOString().split('T')[0]
					}&where[ends_at]=${date?.toISOString().split('T')[0]}`,
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				)
				.then((response) => {
					console.log('response: ', response);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [accessToken, date]);

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
