const URL_API = '';

export const getLists = async () => {
    const lists = await fetch(`${URL_API}`);
    return await lists.json();
}

export const getOneList = async (code) => {
    const list = await fetch(`${URL_API}/${code}`);
    return await list.json();
}

export const insertList = async (list) => {
    const res = await fetch(`${URL_API}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(list)
    });
    return await res.json();
}

export const updateList = async (code, updatedList) => {
    const response = await fetch(`${URL_API}/${code}`, {
        method: "PUT", 
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(updatedList)
    });
    return await response.json();
}

export const deleteList = async (code) => {
    const res = await fetch(`${URL_API}/De/${code}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        }
    });
    return await res.json();
}
