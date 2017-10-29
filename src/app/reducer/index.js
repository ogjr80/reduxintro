module.exports = (state, action) => {
  switch(action.type){
    case 'CHANGE_TEXT':
      return {
        text: action.text
      }
    case 'MAKE_TEXT':
      return {
        text: action.someText
      }
    default:
      return state;
  }
}
