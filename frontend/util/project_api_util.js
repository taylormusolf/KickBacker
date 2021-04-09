export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects/'
  })
);

export const fetchProject = projectId => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  })
);


export const createProject = FormData => (
  $.ajax({
    method: 'POST',
    url: '/api/projects/',
    data: FormData,
    contentType: false,
    processData: false
  })
);

export const updateProject = (FormData, projectId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/projects/${projectId}`,
    data: FormData,
    contentType: false,
    processData: false
  })
);

export const updateProjectNoImg = (project, projectId) => {
  return $.ajax({
      url: `/api/projects/${projectId}`,
      method: 'PATCH',
      data: {project}
  })
} 

export const deleteProject = projectId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${projectId}`
  })
);