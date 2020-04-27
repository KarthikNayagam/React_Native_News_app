export const getSelectedArticles = (array, searchName) => {
  if (searchName !== 'All News') {
    return array.filter((obj) => {
      return obj.source.name === searchName;
    });
  } else {
    return array;
  }
};
