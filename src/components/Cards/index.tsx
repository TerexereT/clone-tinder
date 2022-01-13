import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC, useLayoutEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import instance from '../../config/axios';

interface Person {
	name: string;
	imgUrl: string;
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

	const [people, setPeople] = useState<Person[]>([]);

	const swiped = (direction: any, nameToDelete: string) => {};

	const outOfFrame = (name: string) => {
		console.log(name + ' abandono la pantalla!');
	};

	useLayoutEffect(() => {
		const fetch = async () => {
			const req = await instance.get('/tinder/card');
			setPeople(req.data);
		};
		fetch();
	}, []);

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
						<div style={{ backgroundImage: `url(${person.imgUrl})` }} className={classes.card}>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default Cards;
