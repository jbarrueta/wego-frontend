export const createQueryString = (data) => {
  const query = Object.keys(data)
    .map((key) => {
      let val = data[key];
      if (typeof val === "object" && !(val instanceof Date)) {
        val = this.createQueryString(val);
      } else {
        val = encodeURIComponent(`${val}`.replace(/\s/g, "_"));
      }
      return `${key}=${val}`;
    })
    .join("&");
  return query;
};
