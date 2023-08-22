const nodeFactory = (value = null, next = null) => {
	return { value, next };
};

const linkedListFactory = () => {
	let head = null;
	let tail = null;
	let length = 0;

	const getHead = () => {
		return { head };
	};

	const getTail = () => {
		return { tail };
	};

	const size = () => {
		return { length };
	};

	const append = (value) => {
		let newNode = nodeFactory(value);
		let currentNode;
		if (!head) {
			head = newNode;
			tail = newNode;
		} else {
			currentNode = head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = newNode;
			tail = newNode;
		}
		length++;
		return { head };
	};

	const prepend = (value) => {
		let newNode = nodeFactory(value);
		if (!head) {
			head = newNode;
		} else {
			newNode.next = head;
			head = newNode;
		}
		length++;
		return { head };
	};

	const at = (index) => {
		let currentNode = head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return { at: currentNode };
	};

	const pop = () => {
		let currentNode = head;
		while (currentNode.next.next) {
			currentNode = currentNode.next;
		}
		popped = currentNode.next;
		currentNode.next = null;
		tail = currentNode;
		length--;
		return { popped };
	};

	const contains = (value, currentNode = head) => {
		if (currentNode.value === value) {
			return true;
		} else if (currentNode.next === null) {
			return false;
		} else {
			return contains(value, currentNode.next);
		}
	};

	// const find = (value, currentNode = head, index = 0) => {
	// 	if (currentNode.value === value) {
	// 		return index;
	// 	} else if (currentNode.next === null) {
	// 		return null;
	// 	} else {
	// 		index++;
	// 		return find(value, currentNode.next, index);
	// 	}
	// };

	const find = (value) => {
		let currentNode = head;
		for (let i = 0; i < length; i++) {
			if (currentNode.value === value) {
				return i;
			} else if (currentNode.next === null) {
				return null;
			} else {
				currentNode = currentNode.next;
			}
		}
	};

	const toString = (currentNode = head) => {
		if (currentNode.next === null) {
			return `(${currentNode.value}) -> null`;
		} else {
			return `(${currentNode.value}) -> ` + toString(currentNode.next);
		}
	};

	const insertAt = (value, index) => {
		if (index > length) {
			return null;
		}
		let currentNode = head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		let newNode = nodeFactory(value, currentNode.next);
		currentNode.next = newNode;
		if (newNode.next === null) {
			tail = newNode;
		}
		length++;
		return { newNode };
	};

	const removeAt = (index) => {
		if (index > length || index < 0) {
			return null;
		} else if (index === 0) {
			let removedNode = head;
			head = head.next;
			length--;
			return { removedNode };
		}

		let currentNode = head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		if (currentNode.next.next === null) {
			tail = currentNode;
		}
		removedNode = currentNode.next;
		currentNode.next = currentNode.next.next;
		length--;
		return { removedNode };
	};

	return {
		getHead,
		getTail,
		append,
		prepend,
		size,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
};

let l = linkedListFactory();
l.prepend(0);
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);
l.append(6);
l.removeAt(6);

console.log(l.toString());
console.log(l.size());
console.log(l.getTail());
