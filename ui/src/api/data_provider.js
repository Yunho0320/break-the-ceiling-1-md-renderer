export const parsedData = async (filename) => {
    const res = await fetch(`/api/${filename}`);
    console.log(res);
    if (!res.ok) {
        const message = await res.text(); // read error message
        throw new Error(`API error: ${res.status} ${message}`);
    }
    return await res.json();
};
