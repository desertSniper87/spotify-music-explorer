import { useState } from "react";

export enum STORAGE_KEY {
    SPOTIFY_AUTH_KEY = 'SPOTIFY_AUTH_KEY'
}

function useStorage<T>(key: STORAGE_KEY, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteValue = () => {
        try {
            if (typeof window !== "undefined") {
                setStoredValue(initialValue);
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return [storedValue, setValue, deleteValue] as const;
}


export default useStorage;
