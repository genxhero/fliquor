

export const createComment = (formData, photoID) => {

return   $.ajax({
     url: `/api/photos/${photoID}/comments`,
     method: "POST",
     data: formData,
     processData: false,
     contentType: false
   })
};


export const destroyComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    method: "DELETE"
  })
);
