/**
 * Centralized Storage Utility
 * Uses localStorage to manage preferences and mock data.
 */

const Storage = {
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error(`Error parsing localStorage key "${key}":`, e);
            return null;
        }
    },
    
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error setting localStorage key "${key}":`, e);
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error(`Error removing localStorage key "${key}":`, e);
        }
    }
};

window.Storage = Storage;
