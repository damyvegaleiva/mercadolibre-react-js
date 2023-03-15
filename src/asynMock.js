import { useEffect, useState } from "react"

const APIurl = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export function useFetch(searchValue) {
    const [data, setData] = useState([])
    const [isLoading, SetLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        SetLoading(true)

        setTimeout(() => {
            fetch(APIurl + searchValue)
                .then(resolve => resolve.json())
                .then(data => {
                    setError(null)
                    setData(data.results.splice(1, 15))
                })
                .catch(error => setError(error))
                .finally(() => SetLoading(false))
        }, 1000);
    }, [searchValue])

    return { data, error, isLoading }
}