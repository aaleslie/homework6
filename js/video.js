var video;
var volume;

function getVid() {
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play()
	console.log("Play Video");
	console.log(video);
	volume = document.querySelector("#volume")
	console.log(volume)
	volume.innerHTML = ((video.volume * 100) + "%");
}

function pauseVid() {
	video.pause()
	console.log("Pause Video");
}

  function decreaseSpeed() {
		video.playbackRate = video.playbackRate * 0.8;
  	console.log("Speed is " + video.playbackRate);
 }

	function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
	}

function skipAhead() {
	console.log(video.currentTime);
	console.log(video.currentTime + 60);
	video.currentTime += 60

	if (video.currentTime > 596)
	        { video.load()
						video.play()
						video.playbackRate = 1;
	        }
	 }

function mute() {
	if (video.muted){
		video.muted = false;
		console.log("Changing to unmuted");
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Changing to muted");
		document.getElementById("mute").innerHTML = "Unmute";
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
 	console.log("Volume is " + video.volume/100);
	volume.innerHTML = ((video.volume * 100) + "%");
}

function gray() {
	video.classList.toggle("grayscale");
	console.log("In grayscale")
}

function color() {
	video.classList.toggle("grayscale");
	console.log("In color")
}
