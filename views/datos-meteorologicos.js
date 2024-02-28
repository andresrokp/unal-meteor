function estaciones_entityList(params) {
    
    function vistoHaceDK_cellValue(params) {

        return getRemainingTime(value);

        function getRemainingTime(lastSeenTime) {
            // Calculate the difference in milliseconds
            const now = Date.now();
            const difference = now - lastSeenTime;

            // Define the time intervals in milliseconds
            const intervals = [
                { label: 'sem', duration: 7 * 24 * 60 * 60 * 1000 },
                { label: 'día', duration: 24 * 60 * 60 * 1000 },
                { label: 'hr', duration: 60 * 60 * 1000 },
                { label: 'min', duration: 60 * 1000 },
                { label: 'seg', duration: 1000 }
            ];

            // Initialize variables
            let remaining = difference;
            let result = [];

            // Iterate through intervals to get the appropriate time units
            for (const interval of intervals) {
                if (remaining >= interval.duration) {
                    const value = Math.floor(remaining / interval.duration);
                    result.push(`${value} ${interval.label}`);
                    remaining %= interval.duration;
                }
                if (result.length === 2) {
                    break; // We only need 2 time frequencies
                }
            }

            // Format the result
            let remainingTime = result.join(', ');
            if (remainingTime === '') {
                remainingTime = 'just now';
            }

            return remainingTime;
        }
    }
}