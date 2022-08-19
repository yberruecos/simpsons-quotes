import {describe,test,expect} from 'vitest'
import { quoteInfo } from './quote'
import { render, screen } from '@testing-library/react'
import Quote from './quote'

const testInfo:quoteInfo={
    "quote": "That's where I saw the leprechaun...He told me to burn things.",
    "character": "Ralph Wiggum",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png",
    "characterDirection": "Left"
}

describe('Test quote component',()=>{
    test('render the props',()=>{
        const {container}=render(<Quote info={testInfo}></Quote>)
        expect(screen.getByText(/That's where I saw the leprechaun...He told me to burn things./i)).toBeDefined()
        expect(screen.getByText(/Ralph Wiggum/i)).toBeDefined()
        const imgElement=container.getElementsByTagName('img');
        expect(imgElement[0].src).toBe('https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png')
    })
})