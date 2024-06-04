import React, { useState } from 'react'

function Counter() {

    const [counts, setCounts] = useState(0);

    const superLike = () => {
        for (let i = 1; i <= 5; i++) {
            // setCounts(counts + 1)
            setCounts(prevCount => prevCount + 1)
        }
    }

    return (
        <div style={{ width: "300px", height: '25vh', backgroundColor: 'lightseagreen' }}>
            <center>
                <h1>{counts}</h1>
                <button onClick={() => setCounts(counts + 1)}>Like</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => setCounts(counts - 1)}>Unlike</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => setCounts(0)}>Reset</button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={superLike}>Super Like</button>
            </center>

        </div>
    )
}

export default Counter

