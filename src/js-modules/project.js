import List from './list'

var incr = (function () {
    var i = 1;

    return function () {
        return i++;
    }
})();

const Project = (() => {
	let listCollection = [];
	
	const create = (name) => {
		const id = incr();
		const todos = {};
		return { id, name, todos };
	}

	const createList = (title, importance) => {
		listCollection.push(List.create(title, importance));
	}

	const getListCollection = () => {
		return listCollection;
	}

	return { create, createList };
})();

export default Project