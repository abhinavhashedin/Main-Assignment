export const getAllSuperHero = async () => {
    try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
        const data = await response.json();  
        return data; 
    } catch (err) {
        console.log(err)
    }
}

export const getSuperHeroById = async (id) => {
    try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        const data = await response.json();  
        return data; 
    } catch (err) {
        console.log(err)
    }
}