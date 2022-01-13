import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashIcon from '@mui/icons-material/FlashOn';
import ReplayIcon from '@mui/icons-material/Replay';
import StarRateIcon from '@mui/icons-material/StarRate';
import { IconButton, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import { FC } from 'react';
import './styles.css';

const useStyles = makeStyles((theme: Theme) => ({
	swipeButtons: {
		position: 'fixed',
		display: 'flex',
		bottom: '10vh',
		width: '100%',
		justifyContent: 'space-evenly',
	},
	repeat: {
		padding: '2vw !important',
		color: '#f5b748 !important',
	},
	left: {
		padding: '2vw !important',
		color: '#ec5e6f !important',
	},
	star: {
		padding: '2vw !important',
		color: '#62b4f9 !important',
	},
	right: {
		padding: '2vw !important',
		color: '#76e2b3 !important',
	},
	lightning: {
		padding: '2vw !important',
		color: '#915dd1 !important',
	},
}));

const SwipeButtons: FC = () => {
	const classes = useStyles();
	return (
		<div className={classnames(classes.swipeButtons, 'swipeButtons')}>
			<IconButton className={classes.repeat}>
				<ReplayIcon fontSize='large' />
			</IconButton>
			<IconButton className={classes.left}>
				<CloseIcon fontSize='large' />
			</IconButton>
			<IconButton className={classes.star}>
				<StarRateIcon fontSize='large' />
			</IconButton>
			<IconButton className={classes.right}>
				<FavoriteIcon fontSize='large' />
			</IconButton>
			<IconButton className={classes.lightning}>
				<FlashIcon fontSize='large' />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
