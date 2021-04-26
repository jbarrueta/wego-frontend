export const createQueryString = (data) => {
  const query = Object.keys(data)
    .map((key) => {
      let val = data[key];
      console.log(val);
      if (typeof val === "object" && !(val instanceof Date)) {
        console.log("recursive");
        val = this.createQueryString(val);
      } else {
        val = encodeURIComponent(`${val}`.replace(/\s/g, "_"));
        console.log(val);
      }
      return `${key}=${val}`;
    })
    .join("&");
  console.log(query);
  return query;
};
