const API_KEY = "ad20c727bbbaa5c065dd9a1c3556a50b";
const API_BASE = "https://api.themoviedb.org/3" ;

const basicFetch = async (endpoit) => {
    const req = await fetch(`${API_BASE}${endpoit}`)
    const json = await req.json()
    return json
}


export default { 
       getHomeList: async () => {
            return [
                {
                    slug: "trending",
                    title: "Recomendados para Você",
                    items: await basicFetch(`/trending/all/day?language=pt-BR&api_key=${API_KEY}`)
                    
                },
                {
                    slug: "toprated",
                    title: "Em Alta",
                    items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: "action",
                    title: "Ação",
                    items: await basicFetch(`/discover/movie?with_genres=28&&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: "comedy",
                    title: "Comédia",
                    items: await basicFetch(`/discover/movie?with_genres=35&&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: "horror",
                    title: "Terror",
                    items: await basicFetch(`/discover/movie?with_genres=27&&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: "romance",
                    title: "Romance",
                    items: await basicFetch(`/discover/movie?with_genres=10749&&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: "documentary",
                    title: "Documentários",
                    items: await basicFetch(`/discover/movie?with_genres=99&&language=pt-BR&api_key=${API_KEY}`)
                }
                
            ]
       }
}
