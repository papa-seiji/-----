function primeFactorizationWithExponents(number) {
    const primeFactors = {};
    while (number % 2 === 0) {
        primeFactors[2] = (primeFactors[2] || 0) + 1;
        number /= 2;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            primeFactors[i] = (primeFactors[i] || 0) + 1;
            number /= i;
        }
    }
    if (number > 2) {
        primeFactors[number] = 1;
    }
    return primeFactors;
}

function factorize() {
    const inputNumber = document.getElementById('inputNumber').value;
    const number = parseInt(inputNumber);
    if (isNaN(number) || number < 2) {
        document.getElementById('result').textContent = '2以上の整数を入力してください。';
        return;
    }
    const factors = primeFactorizationWithExponents(number);
    const resultArray = [];
    for (const [prime, exp] of Object.entries(factors)) {
        resultArray.push(exp === 1 ? `${prime}` : `${prime}^${exp}`);
    }
    document.getElementById('result').textContent = `素因数分解: ${resultArray.join(' × ')}`;
}
