const splitAddressByLastDot = async (ip) => {
  let index = ip.lastIndexOf(".");
  return [ip.slice(0, index), ip.slice(index + 1)];
};

module.exports = {
  splitAddressByLastDot
};
