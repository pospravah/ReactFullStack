import React from 'react';

const Conditional = () => {

    const value = true;

    const returnValue = () => {
        return false
    }

    const showIt = () => {
        return (
            returnValue() ?
            <div> 
                Hello it's true
            </div>
            : 
            <div>
                Hello it's false
            </div>
        )

    }

    return (
        <div>
            {
                showIt()
                // returnValue()  ?
            }
        </div>
    )
}

export default Conditional;