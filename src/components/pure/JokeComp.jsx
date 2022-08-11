import React, { useState } from 'react';
import axios from 'axios';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const JokeComp = () => {
    const [joke, setJokes] = useState([]);
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);

    const newJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            const joke = res.data;
            console.table(joke);
            setJokes(joke);
            setPositive(0);
            setNegative(0);
        })
        .catch((error) => console.log(error));
    }

    const votePositive = () => {
        setPositive(positive + 1);
    }
    const voteNegative = () => {
        setNegative(negative + 1);
    }

    return (
        <div>
            <div>{joke.value}</div>
            {joke ? (
                <div>
                <div>
                    <ThumbUpIcon color="success" onClick={votePositive} />
                    {positive}
                </div>
                <div>
                    {' '}
                    <ThumbDownIcon color="error" onClick={voteNegative} />
                    {negative}
                </div>
            </div>
            ) : null}            
            <button onClick={newJoke}>New Joke</button>
        </div>
    );
}

export default JokeComp;
