class ApiFeatures {
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // fields to be removed before processing
    const removeFields = ["keyword", "page", "limit"];

    //removing the unwanted fields
    removeFields.forEach((x) => {
      delete queryCopy[x];
    });

    // executing the find function and proving the sorted queryCopy to it
    this.query = this.query.find(queryCopy);
    return this;
  }
}

module.exports = ApiFeatures;
