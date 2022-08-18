import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value});

    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)

    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Find Your Next Video Via YouTube Public API
                        </label>
                        <input
                            type="text"
                            placeholder="ReactJS..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;