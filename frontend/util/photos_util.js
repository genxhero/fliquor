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
