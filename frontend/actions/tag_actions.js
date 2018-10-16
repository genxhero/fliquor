import * as TagUtil from "../util/tag_util";

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";

export const receiveTag = tag => {
  return ({
    type: RECEIVE_TAG,
    tag
  });
}

export const receiveTags= tags => {
return ({
  type: RECEIVE_TAGS,
  tags
});
}

export const requestTag = tagID => dispatch  => (
  TagUtil.fetchTag(tagID).then(tag =>(
    dispatch(receiveTag(tag)))
  ));

export const requestTags = (tags) => dispatch => (
  TagUtil.fetchTags(tags).then(tags => (
    dispatch(receiveTags(tags)))
  ));
