import { Grid } from '@mui/material';
import Header from '../Header';

interface Props {
	children: JSX.Element;
}
function AppLayout({ children }: Props) {
	return (
		<Grid container>
			<Header />
			<Grid container my={3} px={3} justifyContent={'center'}>
				{children}
			</Grid>
		</Grid>
	);
}
export default AppLayout;
