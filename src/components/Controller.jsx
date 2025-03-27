import React from 'react'

const Controller = ({ btn, onClickButton }) => {
    return (
        <div>
            {btn.map((value, index) => (

                <button
                key={index}
                onClick={()=>{onClickButton(value)}}
                >
                    {value > 0 ? `+${value}` : value}
                </button>
            ))}
        </div>
    )
}

export default Controller