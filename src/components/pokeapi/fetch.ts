import axios from 'axios'

interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export function getPokemon(id:number) {
    const data = axiosClient.get(`${id}/`).then((res) => {
        transformedPokemon(res.data)
    })
}

function transformedPokemon(data:any) {
    console.log(data.name)
}