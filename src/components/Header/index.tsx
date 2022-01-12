import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		zIndex: 100,
		borderBottom: '1px solid #f9f9f9',
	},
	icon: {
		padding: 20,
	},
	logo: {
		objectFit: 'contain',
		height: 40,
	},
}));

const Header: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.header}>
			<IconButton>
				<PersonIcon fontSize='large' className={classes.icon} />
			</IconButton>

			<img
				alt=''
				src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png'
				className={classes.logo}
			/>

			<IconButton>
				<ForumIcon fontSize='large' className={classes.icon} />
			</IconButton>
		</div>
	);
};

export default Header;
