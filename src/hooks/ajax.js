import { useEffect, useState } from 'react';
import axios from 'axios';

const useAjax = () => {
    const [options, request] = useState({});
    const [response, setResponse] = useState({});



    useEffect(() => {
        async function ajax() {
            if (!options.url) return;
            let res = await axios(options);
            setResponse(res.data);
        }
        ajax();
    }, [options])

    return [request, response];
}

export default useAjax;