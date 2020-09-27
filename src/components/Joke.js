import React from 'react';

const Joke = (props) => {
    return (
        <div className="bg-dark">
            <div className="container vh-100">
                <div className="row col-12 text-white">
                    <div className="py-2">
                        <p className="lead">{props.currentJoke}</p>
                    </div>
                </div>
                <div className="row col-4 pb-2">
                    <button className="btn btn-primary" onClick={() => props.getNewJoke()}>
                        Hit me another
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Joke;