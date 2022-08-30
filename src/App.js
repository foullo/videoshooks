import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";
//import './App.css';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('reactJS');

    useEffect(() => {
        setSelectedVideo(videos[0]);

    }, [videos]);

    return (
        <div className="ui container" style={{'paddingTop': "30px"}}>
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui stackable row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={(video) => setSelectedVideo(video)}
                            videos={videos}/>
                    </div>

                </div>
            </div>
        </div>
    );

};


export default App;
