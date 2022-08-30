import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

/*
    const onInputChange = (event) => {
        setTerm(event.target.value);
    };
*/

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);

    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>
                        Find Your Next Video Via YouTube Public API
                    </label>
                    <input
                        type="text"
                        placeholder="ReactJS..."
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );

};

/*class SearchBar extends React.Component {

    render() {

    }
}*/

export default SearchBar;