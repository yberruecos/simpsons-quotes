import { useState } from "react"
import {useQuery} from 'react-query'
import axios from 'axios'
import { quoteInfo } from "../components/quote/quote"

const getData= async(count:string,charater:string)=>{
    const {data}:any=await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}&character=${charater}`)
    return data
}

const useInitialData=()=>{
    const [count,setCount]:any=useState('1')
    const [character,setCharacter]:any=useState('')
    const {isLoading,error,data} = useQuery(['data', character,count],()=>getData(count,character),{ keepPreviousData : true })

    return [
        count,
        setCount,
        character,
        setCharacter,
        isLoading,
        error,
        data
    ]
}

export default useInitialData