import LayoutPrincipal from './layoutPrincipal'
import {describe,test,expect,beforeEach, vi} from 'vitest'
import { quoteInfo } from '../../components/quote/quote'
import { render, renderHook, screen } from '@testing-library/react'

describe('Test LayoutPrincipal component',()=>{
    test('render the data',()=>{
        beforeEach(() => {
            vi.mock('../../hooks/useInitialData', () => {
                return {
                    default: ()=> ['1',{},'',{},false,false,[{
                        "quote": "This is a unit test",
                        "character": "Developer",
                        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png",
                        "characterDirection": "Left"
                        }]]
                }
            })
        });
        const {container}=render(<LayoutPrincipal></LayoutPrincipal>)
        expect(screen.getByText(/This is a unit test/i)).toBeDefined()
        expect(screen.getByText(/Developer/i)).toBeDefined()
        const imgElement=container.getElementsByTagName('img');
        expect(imgElement[0].src).toBe('https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png')
    })
})