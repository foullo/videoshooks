import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('Reactjs')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        //response.data.items
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        //console.log('From the App', video);
        this.setState({selectedVideo: video});

    };


    render() {

        return (
            <div className="ui container" style={{'paddingTop': "30px"}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                       <div className="five wide column">
                           <VideoList
                               onVideoSelect={this.onVideoSelect}
                               videos={this.state.videos}/>
                       </div>

                    </div>
                </div>
            </div>
        );

    }

}

export default App;
