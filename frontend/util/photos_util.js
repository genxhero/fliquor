export const fetchPhoto = photo => (
  $.ajax({
    url: '/api/photos',
    method: 'GET',
    data: {photo}
  })
);

export const fetchPhotos = photos => (
  $.ajax({
    url: '/api/photos',
    method: 'GET',
    data: {photos}
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
