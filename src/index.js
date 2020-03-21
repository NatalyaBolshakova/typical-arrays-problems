
exports.min = function min (array) {
    if (array === undefined || array == ''){
        return 0;
      } else {
        let minR = array.reduce((minN, item) => Math.min(minN,item),0);
        return minR;
      }    
}

exports.max = function max (array) {
    if (array === undefined || array == ''){
        return 0;
      } else {
        let maxR = array.reduce((maxN, item) => Math.max(maxN,item),0);
        return maxR;
      }
}

exports.avg = function avg (array) {
    if (array === undefined || array == ''){
        return 0;
      } else {
        let sumR = array.reduce((sum, item) => sum + item,0);
        let avgR = sumR/array.length;
        return avgR;
      }
}
