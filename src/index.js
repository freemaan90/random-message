const messages = [ 'Oscar', 'Ana', 'Nicolay', 'Jessica', 'Diego', 'Laura', 'Frederico' ];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
