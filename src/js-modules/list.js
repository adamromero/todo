
const List = (() => {
	
	const create = (title, importance) => {
		//const id = Storage.getId('project') || Helper.random(1, 100000)
		const id = 1;
	    const isImportant = importance;
	    const isCompleted = false;
		return { id, title, isImportant, isCompleted }
	}

	return { create };
})();

export default List