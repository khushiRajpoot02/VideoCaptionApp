// import React, { Component } from 'react';
// import VideoPlayer from 'react-video-js-player';
 
// class VideoApp extends Component {
//     player = {}
//     state = {
//         video: {
//             src: "https://www.w3schools.com/html/mov_bbb.mp4",
//             poster: "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
//         }
//     }
 
//     onPlayerReady(player){
//         console.log("Player is ready: ", player);
//         this.player = player;
//     }
 
//     onVideoPlay(duration){
//         console.log("Video played at: ", duration);
//     }
 
//     onVideoPause(duration){
//         console.log("Video paused at: ", duration);
//     }
 
//     onVideoTimeUpdate(duration){
//         console.log("Time updated: ", duration);
//     }
 
//     onVideoSeeking(duration){
//         console.log("Video seeking: ", duration);
//     }
 
//     onVideoSeeked(from, to){
//         console.log(`Video seeked from ${from} to ${to}`);
//     }
 
//     onVideoEnd(){
//         console.log("Video ended");
//     }
 
//     render() {
//         return (
//             <div>
//                 <VideoPlayer
//                     controls={true}
//                     src={this.state.video.src}
//                     poster={this.state.video.poster}
//                     width="720"
//                     height="420"
//                     onReady={this.onPlayerReady.bind(this)}
//                     onPlay={this.onVideoPlay.bind(this)}
//                     onPause={this.onVideoPause.bind(this)}
//                     onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
//                     onSeeking={this.onVideoSeeking.bind(this)}
//                     onSeeked={this.onVideoSeeked.bind(this)}
//                     onEnd={this.onVideoEnd.bind(this)}
//                 />
//             </div>
//         );
//     }
// }
// export default VideoApp;


import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class VideoApp extends Component {
    player = {};
    state = {
        video: {
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        }
    };

    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay(duration) {
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration) {
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration) {
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration) {
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to) {
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd() {
        console.log("Video ended");
    }

    render() {
        return (
            <div className="container">
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}

export default VideoApp;
