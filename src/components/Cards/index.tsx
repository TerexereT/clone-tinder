import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC, useState } from 'react';
import TinderCard from 'react-tinder-card';

interface Person {
	name: string;
	url: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	cards: {
		'& h3': {
			position: 'absolute',
			bottom: 0,
			margin: 10,
			color: '#fff',
		},
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '10vh',
	},
	swipe: {
		position: 'absolute',
	},
	card: {
		width: 600,
		position: 'relative',
		height: '50vh',
		background: '#fff',
		padding: 20,
		maxWidth: '85vw',
		borderRadius: 20,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3)',
	},
}));

const Cards: FC = () => {
	const classes = useStyles();

	const [people, setPeople] = useState<Person[]>([
		{
			name: 'Elon Musk',
			url: 'https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg',
		},
		{
			name: 'Jeff Bezos',
			url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/amazon-ceo-jeff-bezos-now-buff-1500392161.jpg',
		},
		{
			name: 'Sandra Bullock',
			url: 'https://static.mujerhoy.com/www/multimedia/202111/23/media/cortadas/nueva-pelicula-sandra-bullock-imperdonable-kOdB-U16039808671hiH-624x624@MujerHoy.jpg',
		},
	]);

	const swiped = (direction: any, nameToDelete: string) => {};

	const outOfFrame = (name: string) => {
		console.log(name + ' abandono la pantalla!');
	};
	return (
		<div className={classes.cards}>
			<div className={classes.container}>
				{people.map((person) => (
					<TinderCard
						className={classes.swipe}
						key={person.name}
						preventSwipe={['up', 'down']}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}>
						<div style={{ backgroundImage: `url(${person.url})` }} className={classes.card}>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default Cards;
