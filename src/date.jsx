import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchDate = (url) => {

    let [respanse,setRespanse] =useState(null)
    let [isLoding,setIsLoding] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setRespanse(res.data)
                setIsLoding(false)
            })

    }, [url])
    return {respanse,isLoding}

}

export default useFetchDate;