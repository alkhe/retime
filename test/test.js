let { defer, sleep } = require('../lib');

(async () => {
	let ap = defer(() => 1, 1000);
	let bp = defer(() => 2, 2000);
	let cp = defer(() => 3, 3000);

	console.log(await bp);
	console.log(await ap);
	console.log(await cp);

	await sleep(1000);
	console.log('slept for 1 second');
})();
