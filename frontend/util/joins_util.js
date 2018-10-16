export const destroyTJ = (id) => (
  $.ajax({
    url: `api/tag_joins/${id}`,
    method: "DELETE"
  })
);
