import { useEffect, useState } from "react"


export const useFetch = ( url ) => {
  
    const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null
    });

    const getFetch = async() => {
     //nos aseguramos que siempre al iniciar la peticion se establesca "cargando"
      setState({
        ...state,
        isLoading: true
      })

        const resp = await fetch(url);
        const data = await resp.json();

      //asignamos los valore que devuelve la peticion
        setState({
          data: data,
          isLoading:false,
          hasError: null
        })

        
     }

    useEffect(()=>{
        getFetch();

    },[url])

  return{
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError
  };
}


