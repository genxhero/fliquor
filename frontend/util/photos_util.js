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
