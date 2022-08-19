import React from "react";
import './quote.css'

export type quoteInfo ={
    quote: string,
    character: string,
    image: string,
    characterDirection: string
}

const Quote=({info}:{info:quoteInfo})=>{
    return (
        <article className="character">
            <div style={{order:`var(--${info.characterDirection})`}}  className={info.characterDirection==='Right'?'quote-right':'quote-left'}>
                <h3>{info.character}</h3>
                <p>{info.quote}</p>
            </div>
            <img src={info.image} alt="Image character" />
        </article>
    )
}

export default Quote