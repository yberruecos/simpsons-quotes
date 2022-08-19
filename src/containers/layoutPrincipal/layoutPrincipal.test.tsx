import LayoutPrincipal from './layoutPrincipal'
import {describe,test,expect,beforeEach, vi} from 'vitest'
import { quoteInfo } from '../../components/quote/quote'
import { render, renderHook, screen } from '@testing-library/react'
// import axios from "axios";
// import useInitialData from '../../hooks/useInitialData'
// import { QueryClient, QueryClientProvider } from 'react-query'

// const testInfo:quoteInfo[]=[{
//     "quote": "That's where I saw the leprechaun...He told me to burn things.",
//     "character": "Ralph Wiggum",
//     "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png",
//     "characterDirection": "Left"
// }]

describe('Test LayoutPrincipal component',()=>{
    test('render the data',()=>{
        beforeEach(() => {
            // vi.spyOn(global, 'fetch').mockResolvedValue({
            //         json: vi.fn().mockResolvedValue([testInfo])
            // })
            //vi.spyOn(global,'fetch')
            // vi.spyOn(global, 'fetch').mockResolvedValueOnce({});

            // const queryClient = new QueryClient();
            // const wrapper = ({ children }:{children:any}) => (
            // <QueryClientProvider client={queryClient}>
            //     {children}
            // </QueryClientProvider>
            // );
            // const { result} = renderHook(() => useInitialData(), { wrapper });

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
        // const queryClient = new QueryClient();
        // const wrapper = ({ children }:{children:any}) => (
        // <QueryClientProvider client={queryClient}>
        //     {children}
        // </QueryClientProvider>
        // );
        // const { result} = renderHook(() => useInitialData(), { wrapper });
        // console.log(result)
        const {container}=render(<LayoutPrincipal></LayoutPrincipal>)
        expect(screen.getByText(/This is a unit test/i)).toBeDefined()
        expect(screen.getByText(/Developer/i)).toBeDefined()
        const imgElement=container.getElementsByTagName('img');
        expect(imgElement[0].src).toBe('https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Ralph_Wiggum.png/220px-Ralph_Wiggum.png')
    })
})