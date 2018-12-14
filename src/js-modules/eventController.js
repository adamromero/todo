import Project from './project'
import List from './list'
import viewController from './viewController'

const eventController = (() => {
	let projectCollection = [];
	const addProject = document.getElementById('addProject');
	const addList = document.getElementById('addList');
	const modal = document.getElementById('modal');

	const init = () => {
		if (typeof retrieveProjectsFromStorage() !== "undefined" && retrieveProjectsFromStorage() !== null) {
			projectCollection = JSON.parse(retrieveProjectsFromStorage());
			viewController.renderSavedProjects(projectCollection);
		}
		
		addProject.addEventListener('click', () => {
			createProject();
		});

		document.addEventListener('click', (e) => {
			if (e.target.getAttribute('data-action') == 'expand') {
				openProject();
			}
		});

		document.addEventListener('click', (e) => {
			if (e.target.id == 'modalClose') {
				closeProject();
			}
		});

		addList.addEventListener('click', () => {
			createList();
		});
	}

	const setProjectsToStorage = () => {
		sessionStorage.setItem('projectCollection', JSON.stringify(projectCollection));
	}

	const retrieveProjectsFromStorage = () => {
		return sessionStorage.getItem('projectCollection');
	}

	const createProject = () => {
		let projectName = document.getElementById('projectName').value;
		projectName = projectName !== '' ? projectName : 'Untitled Project';

		let project = Project.create(projectName);
		projectCollection.push(project);
		viewController.renderProject(project);

		setProjectsToStorage();
	}

	const openProject = () => {
		modal.classList.add('display');
	}

	const closeProject = () => {
		modal.classList.remove('display');
	}

	const createList = () => {
		
	}

	return { init }
})();

export default eventController