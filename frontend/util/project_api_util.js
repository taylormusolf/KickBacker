export const fetchProjects = (query) => (
  $.ajax({
    method: 'GET',
    url: `/api/projects?query=${query}`
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

export const deleteProject = projectId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/projects/${projectId}`
  })
);