'use client';

import {useState} from 'react';

export default function BuggButton() {
    const [clicked, setClicked] = useState(false);

    if (clicked) {
        throw new Error('Bugg Button clicked!');
    }

    return (
        <button className='rounded
        bg-red-500
        px-4
        py-2
        font-bold
        text-white
        houver:bg-red-700' onClick={() => setClicked(true)}>    
            Trigger Error
        </button>
    )


}
