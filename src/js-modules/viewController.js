
const viewController = (() => {
	const projectList = document.querySelector('.project-list');
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modalContent');

	const renderProject = (project) => {
		projectList.innerHTML += `<div class='row project-list__item' data-id="${project.id}">
									<div class='project-list__heading'>
										<div class="button button--secondary open-project" data-action="expand">+</div>
										<label class="label">${project.name}</label>
									</div>
									<div class='project-list__content'>
										<div class="button button--primary" data-action="add">+</div>
										<label class="label">Add new List</label>
									</div>
								</div>`;

	}

	const renderList = (project) => {
		modalContent.innerHTML = `<div>
								${project.getListCollection()}
							</div>`;

		modal.classList.add('display');
	}

	const renderSavedProjects = (projects) => {
		projects.forEach((project) => {
			projectList.innerHTML += `<div class='row project-list__item' data-id="${project.id}">
									<div class='project-list__heading'>
										<div class="button button--secondary open-project" data-action="expand">+</div>
										<label class="label">${project.name}</label>
									</div>
									<div class='project-list__content'>
										<div class="button button--primary" data-action="add">+</div>
										<label class="label">Add new List</label>
									</div>
								</div>`;
		});
	}


	return { renderProject, renderList, renderSavedProjects };
})();

export default viewController