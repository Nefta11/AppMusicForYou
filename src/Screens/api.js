const URL_API = 'https://site--apimfu--4nfy6d8474fb.code.run/api/Personas';

export const addPerson = async (personData) => {
    const response = await fetch(`${URL_API}/addPerson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
    });
    return await response.json();
};

export const getPerson = async (personData) => {
    const response = await fetch(`${URL_API}/getPerson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
    });
    return await response.json();
};

export const updateName = async (personData) => {
    const response = await fetch(`${URL_API}/updateName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
    });
    return await response.json();
};

export const deletePerson = async (personData) => {
    const response = await fetch(`${URL_API}/deletePerson`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
    });
    return await response.json();
};

// Funciones para operaciones relacionadas con artistas
export const addArtist = async (artistData) => {
    const response = await fetch(`${URL_API}/addArtist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
    });
    return await response.json();
};

export const getArtist = async (artistData) => {
    const response = await fetch(`${URL_API}/getArtist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
    });
    return await response.json();
};

export const getAllArtists = async () => {
    const response = await fetch(`${URL_API}/getAllArtists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

export const updateArtist = async (artistData) => {
    const response = await fetch(`${URL_API}/updateArtist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
    });
    return await response.json();
};

export const deleteArtist = async (artistData) => {
    const response = await fetch(`${URL_API}/deleteArtist`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
    });
    return await response.json();
};

// Funciones para operaciones relacionadas con géneros
export const addGender = async (genderData) => {
    const response = await fetch(`${URL_API}/addGender`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(genderData),
    });
    return await response.json();
};

export const getGender = async (genderData) => {
    const response = await fetch(`${URL_API}/getGender`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(genderData),
    });
    return await response.json();
};

export const updateGender = async (genderData) => {
    const response = await fetch(`${URL_API}/updateGender`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(genderData),
    });
    return await response.json();
};

export const deleteGender = async (genderData) => {
    const response = await fetch(`${URL_API}/deleteGender`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(genderData),
    });
    return await response.json();
};

export const getAllGenders = async () => {
    const response = await fetch(`${URL_API}/getAllGenders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

// Funciones para operaciones relacionadas con álbumes
export const addAlbum = async (albumData) => {
    const response = await fetch(`${URL_API}/addAlbum`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
    });
    return await response.json();
};

export const getAlbum = async (albumData) => {
    const response = await fetch(`${URL_API}/getAlbum`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
    });
    return await response.json();
};

export const updateAlbum = async (albumData) => {
    const response = await fetch(`${URL_API}/updateAlbum`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
    });
    return await response.json();
};

export const deleteAlbum = async (albumData) => {
    const response = await fetch(`${URL_API}/deleteAlbum`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumData),
    });
    return await response.json();
};

// Funciones para operaciones relacionadas con usuarios
export const addUser = async (userData) => {
    const response = await fetch(`${URL_API}/addUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return await response.json();
};

export const loginUser = async (loginData) => {
    const response = await fetch(`${URL_API}/loginUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    });
    return await response.json();
};
