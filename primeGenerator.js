    function* primeGenerator(limit) {
        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                yield i;
            }
        }
    }

    const primes = primeGenerator(50); 
    for (let prime of primes) {
        console.log(prime); 
    }
