window.addEventListener("DOMContentLoaded", () => {
	fetch("../song/de-vuong/lyric.lrc")
		.then((c) => c.text())
		.then((c) => (window.lr = new Lyricer(document.querySelector("audio"), c)));
});

document.querySelector("audio").addEventListener("song-duration", (e) => {
	document.querySelector(
		".duration"
	).style = `--duration: ${e.detail.percent}%`;
});

document
	.querySelector("audio")
	.addEventListener(
		"lyric-update",
		(e) => (lyricer.innerHTML = e.detail.lyric)
	);

document.querySelector(".duration").addEventListener("click", (e) => {
	const rect = e.target.getBoundingClientRect();
	var x = e.clientX - rect.left; //x position within the element.
	lr.move(x / rect.width);
});

document.querySelectorAll(".icon").forEach((n) =>
	n.addEventListener("click", (e) => {
		if (e.target.classList.contains("play")) {
			e.target.classList.toggle("play");
			e.target.classList.toggle("pause");
			lr.play();
		} else if (e.target.classList.contains("pause")) {
			e.target.classList.toggle("play");
			e.target.classList.toggle("pause");
			lr.pause();
		}
	})
);
