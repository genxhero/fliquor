

export const fetchTags = () => (
  $.ajax({
    url: `/api/tags`,
    method: 'GET'
  })
);

export const fetchTag = id => (
  $.ajax({
    url: `/api/tags/${id}`,
    method: "GET"
  })
);
