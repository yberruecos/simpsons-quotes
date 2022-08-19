import React from "react";
import Filter from "../../components/filter/filter";
import Quote, {quoteInfo} from "../../components/quote/quote"
import useInitialData from "../../hooks/useInitialData";
import './layoutPrincipal.css'

const LayoutPrincipal=()=>{
    const [
        count,
        setCount,
        character,
        setCharacter,
        isLoading,
        error,
        data
    ]=useInitialData()

    if(error)
        return (<h1>An error was found</h1>)

    if(isLoading)
       return(<h1>Loading...</h1>)

    if(data)
        return (
            <section>
                <Filter count={count} setCount={setCount} character={character} setCharacter={setCharacter}></Filter>
                <div className={count>1?'grid':''}>
                    {
                        data?.map((item:quoteInfo,index:number)=>{
                            return <Quote key={`quotes-${index}`} info={item}></Quote>
                        })
                    }
                </div>
            </section>
        )


        return (<></>)
}

export default LayoutPrincipal