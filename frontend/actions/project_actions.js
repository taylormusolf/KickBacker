import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects,
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId
});

export const fetchProjects = filters => dispatch => (
  APIUtil.fetchProjects(filters).then(projects => (
    dispatch(receiveProjects(projects))
  ))
);

export const fetchProject = id => dispatch => (
  APIUtil.fetchProject(id).then(payload => (
    dispatch(receiveProject(payload))
  ))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project).then(project => (
    dispatch(receiveProject(project))
  ))
);

export const updateProject = project => dispatch => (
  APIUtil.updateProject(project.id).then(project => (
    dispatch(receiveProject(project))
  ))
);

export const deleteProject = projectId => dispatch => (
  APIUtil.removeProject(projectId).then(() => (
    dispatch(removeProject(projectId))
  ))
);