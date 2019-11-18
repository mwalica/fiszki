import uuidv4 from "uuidv4";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    case "SET_WORDS":
      return {
        ...state,
        words: action.payload
      };
    case "SET_PHRASES":
      return {
        ...state,
        phrases: action.payload
      };
    case "ADD_WORD":
      const newWord = {
        id: uuidv4(),
        ...action.payload
      };
      const allWords = [...state.words, newWord];
      return {
        ...state,
        words: allWords
      };
    case "ADD_PHRASE":
      const newPhrase = {
        id: uuidv4(),
        ...action.payload
      };
      const allPhrases = [...state.phrases, newPhrase];
      return {
        ...state,
        words: allPhrases
      };
    default:
      return state;
  }
};

export default reducer;
