import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button } from '@mui/material';
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
import { useCallback, useEffect, useState } from 'react';
import { resourceBookings } from '../../utils/mockData';
import { roomIdentifiers } from '../../utils/roomNumberData';

export interface Event {
	id: string;
	startTime: string;
	startTimeHours: number;
	startTimeIndex: number;
	endTime: string;
	endTimeHours: number;
	endTimeIndex: number;
	roomId: string;
}

export interface Room {
	id: string;
	name: string;
	description: string;
}

function RoomsCalendar() {
	const [code, setCode] = useState<string | undefined>();
	const [accessToken, setAccessToken] = useState<string | undefined>();
	const [date, setDate] = useState<Dayjs | null>(
		dayjs(new Date().toLocaleDateString('en-CA'))
	);

	const [events, setEvents] = useState<Event[]>([]);
	const [rooms, setRooms] = useState<Room[]>([]);

	const dateFormatted = date?.toISOString().split('T')[0];

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

	const formatResponse = useCallback((resources: any) => {
		const events: Event[] = [];
		resources.forEach(
			(item: {
				attributes: {
					starts_at: string | number | Date;
					ends_at: string | number | Date;
				};
				id: any;
				relationships: { resource: { data: { id: any } } };
			}) => {
				const startTime = new Date(
					item.attributes.starts_at
				).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
				const endTime = new Date(
					item.attributes.ends_at
				).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
				events.push({
					id: item.id,
					startTime: startTime,
					startTimeHours: new Date(startTime).getHours(),
					startTimeIndex: new Date(startTime).getHours() - 7,
					endTime: endTime,
					endTimeHours: new Date(endTime).getHours(),
					endTimeIndex: new Date(endTime).getHours() - 7,
					roomId: item.relationships.resource.data.id,
				});
			}
		);
		setEvents(events);
	}, []);

	const getEvents = useCallback(() => {
		if (accessToken) {
			axios
				.get(
					`https://api.planningcenteronline.com/calendar/v2/resource_bookings?where[starts_at]=${dateFormatted}&where[ends_at]=${dateFormatted}`,
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					}
				)
				.then((response) => {
					console.log('response: ', response);
					formatResponse(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [accessToken, dateFormatted, formatResponse]);

	const initializeRooms = useCallback(() => {
		const rooms: Room[] = [];
		roomIdentifiers.data.forEach((item) =>
			rooms.push({
				id: item.id,
				name: item.attributes.name,
				description: item.attributes.path_name,
			})
		);
		setRooms(rooms);
	}, []);

	useEffect(() => {
		if (date) {
			getEvents();
			initializeRooms();
			//formatResponse();
		}
	}, [date, formatResponse, getEvents, initializeRooms]);

	console.log('resourceBookings', resourceBookings);
	console.log('rooms', rooms);
	console.log('events', events);

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

	const renderCell = (roomId: string, index: number) => {
		return events.find(
			(e) =>
				e.roomId === roomId &&
				index >= e.startTimeIndex &&
				index <= e.endTimeIndex
		) ? (
			<TableCell
				scope="row"
				sx={{ backgroundColor: '#fcefdf' }}
			></TableCell>
		) : (
			<TableCell scope="row"></TableCell>
		);
	};

	return (
		<>
			<TableContainer component={Paper} sx={{ maxWidth: 1488 }}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: '#f3f3f3' }}>
						<TableRow>
							<Box
								sx={{
									py: 2,
									display: 'flex',
									alignItems: 'center',
									minWidth: 300,
								}}
							>
								<Button
									onClick={() => {
										setDate(dayjs(date).add(-1, 'day'));
									}}
								>
									<ArrowBackIosIcon />
								</Button>
								<DatePicker
									label="Date"
									value={date}
									disablePast
									onChange={(newValue) => {
										setDate(newValue);
									}}
								/>
								<Button
									onClick={() => {
										setDate(dayjs(date).add(1, 'day'));
									}}
								>
									<ArrowForwardIosIcon />
								</Button>
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
						{rooms.map((room, index) => (
							<TableRow key={index}>
								<TableCell
									scope="row"
									sx={{ fontWeight: 'bold' }}
								>
									{room.name}
								</TableCell>
								{columns.map((col, i) => {
									return renderCell(room.id, i);
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
export default RoomsCalendar;
