export const getPhotosByUser = (state, userId) => {
  let result = [];
  for (let id in state.entities.photos) {
    if (state.entities.photos[id].user_id === userId){
      result.push(state.entities.photos[id]);
    }
  }
  return result;
};

export const getPhotosByTag = (state, tagID) => {
  let result = [];
  for (let id in state.entities.photos) {
    if (state.entities.photos[id].user_id === tagID){
      result.push(state.entities.photos[id]);
    }
  }
  return result;
};
