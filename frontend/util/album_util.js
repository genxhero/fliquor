export const fetchAlbum = id => (
  $.ajax({
    url: `/api/albums/${id}`,
    method: 'GET'
  })
);

export const fetchAlbums = () => (
  $.ajax({
    url: '/api/albums',
    method: 'GET'
  })
);

export const createAlbum = formData  => (
  $.ajax({
    url: '/api/albums',
    method: 'post',
    data: formData,
    processData: false,
    contentType: false
  })
);

export const updateAlbum = (album, albumID)  => {

return  $.ajax({
    url: `/api/albums/${albumID}`,
    method: 'patch',
    data: album,
    processData: false,
    contentType: false
  })
};

export const delteAlbum = id => (
  $.ajax({
    url: `/api/albums/${id}`,
    method: 'DELETE'
  })
);
