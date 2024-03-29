export const fetchProjects = (query) => {
  let path;
  if(query){
    path = `/api/projects?query=${query}`
  } else {
    path = `/api/projects`
  }
  return $.ajax({
    method: 'GET',
    url: path
  })
};

export const fetchProject = projectId => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}`
  })
);


export const createProject = FormData => {
  const project = $.ajax({
    method: 'POST',
    url: '/api/projects/',
    data: FormData,
    contentType: false,
    processData: false
  })
  return project;
}

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