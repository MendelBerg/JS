/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
function withdraw(clients, balances, client, amount) {
	for (let i = 0; i <= clients.length; i++) {
		if (clients[i] === client) {
			if (balances[i] < amount) {
				return console.log(-1);;
			} else {
				balances[i] -= amount;
				return console.log(balances[i]);
			}
		}
	}
}


withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
