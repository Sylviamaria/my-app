export const getLocalStorageData = () => {
    const storedData = localStorage.getItem('ticketData');
    return storedData ? JSON.parse(storedData) : null;
};

export const setLocalStorageData = (data) => {
    localStorage.setItem('ticketData', JSON.stringify(data));
};

