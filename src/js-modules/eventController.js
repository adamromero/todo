import Project from './project'
import List from './list'
import viewController from './viewController'

const eventController = (() => {

	const init = () => {
		const addProject = document.getElementById('addProject');
		

		addProject.addEventListener('click', () => {
			createProject();
		});
	
		createList();
	}

	const createProject = () => {
		let project = Project.create('Project');
		viewController.renderProject(project);
	}

	const createList = () => {
		const expandList = document.querySelectorAll('[data-action="expand"]');

		document.addEventListener('click', (event) => {
			if (!event.target.matches('[data-action="expand"]')) return;
			
			let listItem = event.target.parentNode.parentNode.classList;
			if (listItem.contains('expand')) {
				listItem.remove('expand');
			} else {
				listItem.add('expand');
			}

		}, false);
		
	}

	return { init }
})();

export default eventController