
const viewController = (() => {

	const renderProject = (project) => {

		const projectList = document.querySelector('.project-list');
		projectList.innerHTML += `<div class='row project-list__item' data-id="${project.id}">
									<div class='project-list__heading'>
										<div class="button button--secondary" data-action="expand">+</div>
										<label class="label">${project.name}</label>
									</div>
									<div class='project-list__content'>
										<div class="button button--primary" data-action="add">+</div>
										<label class="label">Add new List</label>
									</div>
								</div>`;

	}

	const renderListInfo = (list) => {
		const modal = document.getElementById('modal');
		modal.innerHTML = `<div>
								<div class="button button--primary" data-action="add">+</div>
								<label class="label">Add new List</label></div>
							</div>`;

		modal.classList.add('display');
	}


	return { renderProject, renderListInfo };
})();

export default viewController