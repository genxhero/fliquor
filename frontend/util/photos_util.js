export const fetchPhoto = id => (
  $.ajax({
    url: `/api/photos/${id}`,
    method: 'GET'
  })
);

export const fetchPhotos = () => (
  $.ajax({
    url: '/api/photos',
    method: 'GET'
  })
);

export const createPhoto = formData  => (
  $.ajax({
    url: '/api/photos',
    method: 'post',
    data: formData,
    processData: false,
    contentType: false
  })
);



export const updatePhoto = (photo, photoID)  => {

return  $.ajax({
    url: `/api/photos/${photoID}`,
    method: 'patch',
    data: photo,
    processData: false,
    contentType: false
  })
};

export const deletePhoto = id => (
  $.ajax({
    url: `/api/photos/${id}`,
    method: 'DELETE'
  })
);
