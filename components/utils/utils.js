export const getSelectedArticles = (array, searchName) => {
  if (searchName !== 'All News') {
    return array.filter((obj) => {
      return obj.source.name === searchName;
    });
  } else {
    return array;
  }
};

export const getDynamicCategories = (articles) => {
  const categoryList = [];
  articles.map((item) => {
    item.source.name && categoryList.push(item.source.name);
  });
  return removeDuplicates(retrieveDuplicates(categoryList));
};

const removeDuplicates = (listItems) => {
  return listItems.filter((item, index) => {
    return listItems.indexOf(item) === index;
  });
};

const retrieveDuplicates = (listItems) => {
  return listItems.filter((item, index) => {
    return listItems.indexOf(item) !== index;
  });
};
