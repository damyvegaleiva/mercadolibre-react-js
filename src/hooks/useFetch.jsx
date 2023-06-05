import { useEffect, useState } from "react";

export const useFetch = (APIValue) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.mercadolibre.com/${APIValue}`;

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          if (data?.results) {
            setData(
              data.results.map(({ price, thumbnail, ...rest }) => ({
                ...rest,
                price: price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
                thumbnail: thumbnail.replace("I.jpg", "V.jpg"),
              }))
            );
          } else {
            const { thumbnail, price, ...rest } = data[0].body;

            setData({
              ...rest,
              thumbnail: thumbnail.replace("I.jpg", "V.jpg"),
              price: price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            });
          }
        })
        .finally(() => setIsLoading(false));
    }, 500);
  }, [URL]);

  return { data, isLoading };
};
