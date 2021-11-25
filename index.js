const bmi = (weight, height)=>{
    let bmiCount = (weight/height/height)*10000;
    return bmiCount.toFixed(2); 
};

module.exports = bmi;
