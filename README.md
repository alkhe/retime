# retime

`retime` is a Promise-based time-coordinated execution and scheduling library.

## Install

```sh
$ npm i retime
```

## Usage

```js
import { defer, sleep } from 'retime';

(async () => {
	await sleep(1000);
	console.log('slept 1 second');

	let [a, b] = [
		defer(() => 1, 1000),
		defer(() => 2, 2000)
	];

	console.log(await b);
	console.log(await a);
	// 2
	// 1

	console.log(await* [
		defer(() => 1, 1000),
		defer(() => 2, 2000)
	]);
	// [ 1, 2 ]
})();
```
