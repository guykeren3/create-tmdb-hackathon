const initialData = [];

export default function uInto(data = initialData, action) {
  if (action.type === 'SET_MOVIES') {
    return action.data;
  }

  return data;
}
