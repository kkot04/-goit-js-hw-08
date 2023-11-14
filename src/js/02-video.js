import Player from '@vimeo/player';
import trottle from 'lodash.throttle';
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe, {width: 640,})

function onplay(data){
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', trottle(onplay, 1000));
const timeFromLocalStorage = localStorage.getItem('videoplayer-current-time')
player
  .setCurrentTime(timeFromLocalStorage)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
        default:
        break;
    }
  });

