const formatDate = (timeInSeconds) => {
    //return `${timeInSeconds}s`;
  if (timeInSeconds === undefined || timeInSeconds === null) { 
    return `0s`;
} else {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor(timeInSeconds % 3600 / 60);
    let seconds = Math.floor(timeInSeconds % 3600 / 60);
    let hShow = hours > 0 ? `${hours}h` : ``;
    let minShow = minutes > 0 ? `${minutes}m` : ``;
    let secShow = seconds > 0 ? `${seconds}s` : ``;
    return hShow + minShow + secShow; 
  }
};
  
  module.exports = formatDate;