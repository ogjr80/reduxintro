export function changeValue(text){
  return {
    type: 'CHANGE_TEXT',
    text
  }
}

export function makeValue(someText){
  return {
    type: 'MAKE_TEXT',
    text: someText
  }
}
