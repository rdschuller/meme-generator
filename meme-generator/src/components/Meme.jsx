import { useState, useEffect } from 'react'

export default function Meme() {
    
    
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme((oldImages) => {
            return {
                ...oldImages,
                randomImage: allMemes[randomNumber].url
            }
        })
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    
    return (
        <main className="p-9 font-karla flex flex-col items-center">
            <div className="grid grid-rows-2 grid-cols-2 gap-4 font-karla max-w-3xl mx-auto">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="border-solid border-2 border-slate-400 rounded-sm indent-1.5"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="border-solid border-2 border-slate-400 rounded-sm indent-1.5"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage}
                    className="col-span-2 bg-gradient-to-r from-purple-400 to bg-purple-700 rounded-md h-9 text-white">
                        Get a new meme image 🖼</button>
            </div>
            <div className='relative mt-10'>
                <img src={meme.randomImage} alt="image of a meme" className='w-full rounded-md'/>
                <h2 className='absolute text-center left-0 right-0 text-3xl uppercase text-white top-7 font-impact tracking-wide text-shadow'>{meme.topText}</h2>
                <h2 className='absolute text-center left-0 right-0 text-3xl uppercase text-white bottom-7 font-impact tracking-wide text-shadow'>{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}