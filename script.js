// Function for prime factorization
function primeFactorizationWithExponents(number) {
    const primeFactors = {};

    // Divide by 2 as much as possible
    while (number % 2 === 0) {
        primeFactors[2] = (primeFactors[2] || 0) + 1;
        number /= 2;
    }

    // Divide by odd numbers starting from 3
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            primeFactors[i] = (primeFactors[i] || 0) + 1;
            number /= i;
        }
    }

    // If the remaining number is greater than 2, it's prime
    if (number > 2) {
        primeFactors[number] = 1;
    }

    return primeFactors;
}

// Function to display the result of prime factorization
function factorize() {
    const inputNumber = document.getElementById('inputNumber').value;
    const number = parseInt(inputNumber);

    // Validate input
    if (isNaN(number) || number < 2) {
        document.getElementById('result').textContent = 'Please enter an integer greater than or equal to 2.';
        return;
    }

    // Perform prime factorization
    const factors = primeFactorizationWithExponents(number);
    const resultArray = [];

    // Format the result
    for (const [prime, exp] of Object.entries(factors)) {
        resultArray.push(exp === 1 ? `${prime}` : `${prime}^${exp}`);
    }

    // Display the result
    document.getElementById('result').textContent = `Prime Factorization: ${resultArray.join(' × ')}`;
}

// Function to clear the input field and result
function clearInput() {
    document.getElementById('inputNumber').value = ''; // Clear input field
    document.getElementById('result').textContent = ''; // Clear result
}
