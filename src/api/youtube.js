import axios from 'axios';

//const KEY = process.env.YOUTUBE_KEY;
const KEY = 'AIzaSyBS_Na5mvb6_i7ZPudJAxuNGzhEn0jB_-o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }

});