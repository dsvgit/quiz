const defaultState = null;

export default function(state = defaultState, action) {
  const { type, payload } = action;

  if (type === 'QUIZ_LOADED') {
    return payload;
  }

  return state;
}
