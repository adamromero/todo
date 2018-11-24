
const Project = (() => {
	
	const create = (name) => {
		//const id = Storage.getId('project') || Helper.random(1, 100000)
		const id = 10000
		const todos = {}
		return { id, name, todos }
	}

	return { create };
})();

export default Project