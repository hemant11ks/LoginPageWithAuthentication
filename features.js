/* 1.
const gfName = "MrsRandom";


// const gfName2 = "MrsRandom2";
// const gfName3 = "MrsRandom3";


export const gfName2 = "MrsRandom2";
export const gfName3 = "MrsRandom3";

// module.exports = gfName;

export default gfName;
// export { gfName2, gfName3 };

*/

// Generate random number
// template literal is used because touse expression in a string.

export const genrateRandomPrecentage = () => {
  //  return `${Math.random() * 100}%`;
  //  return `${Math.floor(Math.random() * 100)}%`;
  //  Replace Math.floor with ~~

  return `${~~(Math.random() * 10)}%`;
  
};
