import { useEffect, useRef, useState } from "react";

export function usePost1() {
  const [post, setPost] = useState({});

  async function getPosts()
  {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return post;
} 

export function useFetch(url){
    const [post, setPost] = useState({});

    async function getPosts()
    {
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return post;
}


export const usePrev = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    // r.c -> ''
    // r.c -> a

    return ref.current

}

// It returns first, effect gets called later


export const useDebounce = (value, delay = 500) => {
  
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setDebouncedValue(value);
    }, delay);

  // clean-up function
  return () => {
    clearTimeout(timeout);
  };

  }, [value, delay])

  return debouncedValue;
};

