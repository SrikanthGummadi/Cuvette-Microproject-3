const data = require("./data");
//console.log(data);

//const listByCategory = data.filter((item) => item.category === "Nuts");
//console.log(listByCategory);

const filterByCategory = (category) => {
    return data.filter((item) => item.category === category);
};
    //console.log(filterByCategory("Fruit"));
    //console.log(filterByCategory("Vegetable"));

    const filterByValue = (key, value, comparison) => {
        return data.filter((item) => {
            if (comparison === "equals") {
                return item[key] === value;
            }
            if (comparison === "greater") {
                return item[key] > value;
        }
        if (comparison === "less") {
            return item[key] < value;
    }
  });
};

//console.log(filterByValue("calorie", 100, "less"));
//console.log(filterByValue("calorie", 100, "greater"));

const sortByValue = (key, order) => {
    if (order === "asc") {
        console.log(data.sort((a, b) => a[key] - b[key]));
    }
    if (order === "desc") {
        console.log(data.sort((a, b) => b[key] - a[key]));
    }
};
//sortByValue("protiens", "desc");
sortByValue("cab", "asc");