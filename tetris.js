const validKeys = {
	'32': {
		name: 'space'
	},
	'37': {
		name: 'left'
	},
	'38': {
		name: 'up'
	},
	'39': {
		name: 'right'
	},
	'40': {
		name: 'down'
	},
};

const init = () => {
	const canvas = document.getElementById('game-canvas');
	const ctx = canvas.getContext('2d');
	console.log(ctx)
	let i = 10;
	const drawText = text => {
		ctx.font = "6px";
		ctx.fillStyle = "red";
		ctx.fillText(text,
			((Math.random() * 100) + i),
			((Math.random() * 100) + i),
			);
		i++;
	};

	const keyHandler = {
		handle: (key) => {
			drawText(key.name)
		}
	};

	document
		.addEventListener('keydown', (event) => {
			event.preventDefault();
			if (validKeys[event.which]) {
				keyHandler.handle(validKeys[event.which])
			}
		});
}
