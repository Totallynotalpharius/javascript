function addAB (paramiter1, paramiter2) {
    return paramiter1 + paramiter2;
}

// let functionValue = addAB(7, 10);
// console.log('the returned value of function is: ', functionValue);

for (let i = 1; i < 11; i++) {
    console.log('the value of i', i);
    console.log('function value:', addAB(i, i));
}
