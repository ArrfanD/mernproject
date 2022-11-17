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

    // Filter for Price and Rating based on a range
    let queryString = JSON.stringify(queryCopy);
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (key) => `$${key}`
    );

    // executing the find function and proving the sorted queryCopy to it
    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip)
    return this;
  }
}

module.exports = ApiFeatures;
