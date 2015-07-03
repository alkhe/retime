let defer = (fn = () => {}, time = 0, ...args) =>
	new Promise((res, rej) => {
		setTimeout(() => {
			try {
				return res(fn(...args));
			}
			catch (e) {
				return rej(e);
			}
		}, time)
	});

let sleep = (time = 0) =>
	new Promise(res => {
		setTimeout(res, time);
	});

export default {
	defer,
	sleep
};
