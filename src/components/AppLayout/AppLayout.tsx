import { Grid } from '@mui/material';
import Header from '../Header';

interface Props {
	children: JSX.Element;
}
function AppLayout({ children }: Props) {
	return (
		<Grid container>
			<Header />
			<Grid container spacing={3} mt={5} px={5} justifyContent={'center'}>
				{children}
			</Grid>
		</Grid>
	);
}
export default AppLayout;
