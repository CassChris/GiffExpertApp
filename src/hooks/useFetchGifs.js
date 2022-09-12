import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, range) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, range)
      .then((imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
    });
  }, []);

  return state;
};
