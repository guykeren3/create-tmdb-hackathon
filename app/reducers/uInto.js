const initialData = '';

export default function uInto(data = initialData, action) {
  if (action.type === 'SET_INTO') {
    console.info('uinto data', action.data);
    return action.data;
  }

  return data;
}
