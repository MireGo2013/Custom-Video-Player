const playerVideo = document.querySelector('.player_video');
const video = document.querySelector('.video');
const progress = document.querySelector('.progress_wrapper');
const progressBar = document.querySelector('.progress_fill');
const playBtn = document.querySelector('.play_button');
const sliders = document.querySelector('.range_wrapper');
const skipBtn = document.querySelector('.skip_wrapper');

function togglePlayVideo(e) {
	if (e.target.closest('.play_button') || e.target.closest('.video')) {
		if (video.paused) {
			playVideo()
		} else {
			stopVideo()
		}
	}
}

function playVideo() {
	video.play()
	playBtn.textContent = '❚❚';
	playBtn.setAttribute('title', 'Stop video');
}

function stopVideo() {
	video.pause()
	playBtn.textContent = '►';
	playBtn.setAttribute('title', 'Play video');
}

function skipVideo(e) {
	video.currentTime += parseFloat(e.target.dataset.skip);
}

function changeVolumeAndSpeed(e) {
	video[e.target.name] = e.target.value;
	e.target.setAttribute('title', `${e.target.name} ${e.target.value}`)
}

function changeProgress(e) {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
	if (e.which !== 1) return;
	video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

playerVideo.addEventListener('click', togglePlayVideo)
skipBtn.addEventListener('click', skipVideo)
sliders.addEventListener('change', changeVolumeAndSpeed)
sliders.addEventListener('mousemove', changeVolumeAndSpeed)
video.addEventListener('timeupdate', changeProgress)
progress.addEventListener('mousemove', changeProgress)
progress.addEventListener('click', changeProgress)
