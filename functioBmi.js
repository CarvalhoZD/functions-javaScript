function calcBmi (weight, height) {
    return Math.round(weight / Math.pow(height, 2));
}

module.exports = calcBmi