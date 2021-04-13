export const fetchBackings = () => (
  $.ajax({
    method: 'GET',
    url: `/api/backings/`
  })
);

export const fetchBacking = backingId => (
  $.ajax({
    method: 'GET',
    url: `/api/backings/${backingId}`
  })
);

export const createBacking = backing => (
  $.ajax({
    method: 'POST',
    url: '/api/backings/',
    data: {backing}
  })
);

export const deleteBacking = backingId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/backings/${backingId}`
  })
);