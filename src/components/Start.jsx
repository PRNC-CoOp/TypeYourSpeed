import React, { useState, useEffect, useRef } from "react";
const Start = () => {

    const para = [
        "Typing daily will increase your speed",
        "Bright stars covered the silent sky",
        "Small birds flew above green trees",
        "The keyboard clicks sounded very satisfying",
        "Students practiced typing during computer class",
        "Fresh coffee smelled wonderful this morning",
        "Fast runners trained before sunrise today",
        "The cat slept beside the window",
        "Rainy evenings feel peaceful and relaxing",
        "Short breaks improve focus while working",
        "The library remained quiet all afternoon",
        "Children played happily near the fountain",
        "Typing accurately saves valuable editing time",
        "The bakery sold warm chocolate cookies",
        "Cool winds arrived after heavy rainfall",
        "A colorful kite floated across clouds",
        "Good posture prevents wrist pain easily",
        "The artist painted beautiful mountain scenery",
        "Everyone enjoyed the outdoor music festival",
        "The garden looked fresh after watering",
        "Typing games make learning more enjoyable",
        "Snow slowly covered the empty streets",
        "The puppy chased butterflies around flowers",
        "Healthy meals increase daily energy levels",
        "The teacher explained difficult lessons clearly",
        "Morning exercise improves physical fitness greatly",
        "Bright lights decorated the busy market",
        "Travelers explored ancient buildings during vacation",
        "The train arrived exactly on schedule",
        "Calm ocean waves touched the shoreline",
        "Fast typing boosts workplace productivity significantly",
        "The moon reflected beautifully across water",
        "Young athletes practiced hard every evening",
        "Fresh fruits were arranged on tables",
        "The concert attracted a huge audience",
        "Typing tests help measure improvement regularly",
        "Heavy clouds moved across distant mountains",
        "Friends gathered together for weekend dinner",
        "The classroom felt warm and welcoming",
        "Reading books expands vocabulary and imagination",
        "The chef prepared delicious pasta carefully",
        "Sunlight entered through the open curtains",
        "The museum displayed rare historical artifacts",
        "Soft music played inside the café",
        "The dog barked loudly at strangers",
        "Typing smoothly requires patience and consistency",
        "Beautiful flowers bloomed during early spring",
        "The cyclist rode through narrow streets",
        "Cold mornings make hot tea enjoyable",
        "The team celebrated their exciting victory"
    ];

    const [index, setIndex] = useState(0);
    const [input, setInput] = useState(null);
    const [paras, setParas] = useState(para[index]);
    const [seconds, setSeconds] = useState(0)
    const [isActive, setisActive] = useState(false)
    const timeRef = useRef(null)
    

    const changeIndex = () => {
        setIndex(index + 1)
        setParas(para[index])
    }

    useEffect(() => {

        if (isActive) {
            timeRef.current = setInterval(() => {
                setSeconds((s) => s + 1)
            }, 1000);
        } else {
            clearInterval(timeRef.current)
        }
        return () => clearInterval(timeRef.current)
    }, [isActive])

    const handleChange = (e) => {
        const value = e.target.value
        
        setInput(value)

        if (value.length === 1 && !isActive) {
            setisActive(true)
        }

        if (value === paras) {
            // clearInterval(timeRef.current)
            setisActive(false)
        }
    }

    const minutes = seconds / 60;
    const wpm = seconds > 0 ? Math.round((input.length / 5) / minutes) : 0

    return (
        

        <div className="flex flex-col items-center justify-center">

            <div className="min-w-screen min-h-screen bg-linear-to-br from-pink-300 via-pink-200 to-purple-300 flex flex-col items-center justify-start pt-20 p-6">


                <div className="content-wrapper flex items-center justify-center gap-8 max-w-7xl w-full m-6 select-none text-2xl font-bold font-baloo">

                    <p>{paras}</p>

                </div>


                <input type="text" placeholder='Write the Text above' className='w-full max-w-2xl p-4 text-lg border-2 rounded-2xl border-gray-600 outline-none transition-all duration-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-400 shadow-md bg-white text-gray-800 placeholder:text-gray-500 font-serif m-5' autoFocus='true' autoCapitalize='true' value={input} onChange={handleChange} />

                <p>Seconds: {seconds}</p>
                <p>WPM: {wpm}</p>

                <button className='mt-6 px-6 py-3 bg-purple-400 hover:bg-purple-900 rounded-xl text-lg font-semibold transition-all hover:cursor-pointer' onClick={changeIndex}>{paras === input ? "Next" : "Try more accurately!!!"}</button>

            </div>

        </div>
    )

}

export default Start