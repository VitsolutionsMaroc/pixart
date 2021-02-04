export default {
  arrayToQueryString(arr, key) {
    let queryString = "";
    arr.forEach((item, index) => {
      queryString += `${key}[${index}]=${encodeURIComponent(item)}&`;
    });

    return queryString;
  },
  flatten(arr) {
    return arr.reduce(function(flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  },
  inArray(array, item) {
    return array.filter((i) => i == item).length != 0;
  },
};
