import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debouncedValue, setDebuncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebuncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
