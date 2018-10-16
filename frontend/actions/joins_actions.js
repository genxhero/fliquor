import * as JoinsUtil from "../util/joins_util";

export const REMOVE_TAG = "REMOVE_TAG";

export const removeTag = (photo) => ({
  type: REMOVE_TAG,
  photo
});

export const deleteTag= (id) => dispatch => (
  JoinsUtil.destroyTJ(id).then(photo => dispatch(removeTag(photo)))
);
