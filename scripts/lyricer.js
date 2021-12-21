(function () {
	const lyricParse = (rawlrc) => {
		let lrc = [];
		const lrcArray = rawlrc.split(/[\r\n]/);
		lrcArray.forEach((line) => {
			if (/\[([a-z]+):(.*)\].*/.test(line)) return; // tag
			// timeline
			const [, time, lyric] = /(\[[0-9.:\[\]]*\])+(.*)/.exec(line) ?? [];
			time
				?.replace(/\]\[/g, "],[")
				.split(",")
				.forEach((t) => {
					const [, minus, second] = /\[([0-9]+):([0-9.]+)\]/.exec(t) ?? [];
					if (minus && second) {
						lrc.push({
							starttime: parseInt(minus, 10) * 60 + parseFloat(second),
							line: lyric,
						});
					}
				});
		});
		lrc.sort((a, b) => a.starttime - b.starttime);

		for (let i = 0; i < lrc.length; i++) lrc[i].endtime = lrc[i + 1]?.starttime;

		return lrc;
	};

	const Lyricer = function (node, lyric) {
		// [{ starttime, endtime, line}]
		this.lyric = lyricParse(lyric);
		this.node = node;
		this.duration = this.node.duration;
		this.index = -1;

		if (this.node.nodeName === "AUDIO") {
			this.node.dispatchEvent(
				new CustomEvent("lyric-update", {
					detail: {
						index: 0,
						lyric: this.lyric[0].line,
					},
				})
			);
			this.node.addEventListener("timeupdate", (e) => {
				const current = e.target.currentTime;
				e.target.dispatchEvent(
					new CustomEvent("song-duration", {
						detail: {
							duration: this.duration,
							current: current,
							percent: Math.min(
								(e.target.currentTime / this.duration) * 100,
								100
							),
						},
						bubbles: true,
					})
				);

				const _index = this.lyric.findIndex(
					(x) => x.starttime <= current && x.endtime >= current
				);

				if (this.index != _index) {
					e.target.dispatchEvent(
						new CustomEvent("lyric-update", {
							detail: {
								index: _index,
								lyric: this.lyric[_index].line,
							},
						})
					);
					this.index = _index;
				}
			});
			this.node.addEventListener("durationchange", (e) => {
				this.duration = e.target.duration;
			});
		}
	};

	Lyricer.prototype.move = function (percent) {
		this.node.currentTime = percent * this.duration;
	};
	Lyricer.prototype.play = function () {
		this.node.play();
	};
	Lyricer.prototype.pause = function () {
		this.node.pause();
	};

	window.Lyricer = Lyricer;
})();
