import React from 'react';

function Button(props) {
    return (
        <button type="button" className="btn btn-danger my-3">
            {
                props.text
            }
        </button>
    );
}

export default Button;