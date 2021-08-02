


function filterItems(items, attr) {
  let res = null;
  const filters = attr.split(' ');

  if (filters.length > 1) {

    switch (filters[1]) {
      case 'nose':
        res = items.filter(ele => (ele.attributes.appearance.nose === filters[0]));        
        break;
      case 'hair':
        res = items.filter(ele => (ele.attributes.appearance.hair === filters[0]));  
        break;
      case 'cloth':
        res = items.filter(ele => (ele.attributes.appearance.cloth === filters[0]));  
        break;
      default:
        break;  
    }
  } else {
    res = items.filter(ele => (ele.attributes.personality === attr));  
  }


  return res;
}




export {
  filterItems
}