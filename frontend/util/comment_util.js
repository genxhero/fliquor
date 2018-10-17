

export const createComment = (formData, photoID) => {
  let dummy = "me";
  const somestuff = Object.assign({}, formData);
  // debugger;
   $.ajax({
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
