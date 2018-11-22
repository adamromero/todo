
/*
title, description, dueDate, priority, notes, checklist
*/

import './styles/main.scss'

import './js-modules/project'

const addProject = document.getElementById('addProject');
const projectList = document.querySelector('.project-list');

addProject.addEventListener('click', function() {
	projectList.innerHTML += "<div class='row'>Project</div>";
});

/*
const Project = (title, age) => {
	const sayHello = () => console.log('hello!');
	return { name, age, sayHello };
};*/