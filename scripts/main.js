document.addEventListener("DOMContentLoaded", function () {
	// let gifts = localStorage.getItem("gifts")?.split(",") || [];
	let _name = "Matakunkun";

	Object.defineProperty(window, "name", {
		get: () => _name,
		set: (v) => (_name = v.toString()),
	});

	const modal = document.querySelector(".modal-container");

	const copyToModalContent = function (id) {
		const node = document.querySelector(id);
		const modal = document.querySelector("#modal-container");
		const { class: _class, ltr } = node.dataset;

		const template = node.content
			.cloneNode("true")
			.querySelector("fragment").innerHTML;

		_class
			.split(" ")
			.forEach((c) => modal.querySelector(".modal").classList.add(c));

		modal.querySelector(".container").innerHTML = template.replace(
			"%name%",
			_name
		);
	};

	const clearModal = function () {
		const modal = document.querySelector("#modal-container");
		modal.querySelector(".modal").classList.value = "modal";
		modal.querySelector(".container").innerHTML = "";
	};

	fetch("../song/santa-tell-me/lyric.lrc")
		.then((c) => c.text())
		.then((c) => (this.lr = new Lyricer(document.querySelector("audio"), c)));

	window.addEventListener("click", (e) => {
		if (e.target == modal) {
			document.querySelector("body").classList.remove("modal-showed");
			modal.classList.remove("show");
			clearModal();
		}
	});

	document.querySelectorAll("[data-toggle='modal']").forEach((n) =>
		n.addEventListener("click", (e) => {
			const node = e.target.dataset.toggle
				? e.target
				: e.target.closest("[data-toggle='modal']");

			const { target } = node.dataset;

			copyToModalContent(`#${target}`);
			document.querySelector("body").classList.add("modal-showed");
			modal.classList.add("show");
		})
	);

	// document.querySelectorAll(".gift-item").forEach((n) =>
	// 	n.addEventListener("click", (e) => {
	// 		const target = e.target.closest(".gift-item");
	// 		const index = target.id.split("-").pop();
	// 		if (!target.classList.contains("active")) {
	// 			target.classList.add("active");
	// 			gifts.push(index);
	// 			localStorage.setItem("gifts", gifts.join(","));
	// 		}
	// 	})
	// );

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
		this.lr.move(x / rect.width);
	});

	document.querySelectorAll(".icon").forEach((n) =>
		n.addEventListener("click", (e) => {
			if (e.target.classList.contains("play")) {
				e.target.classList.toggle("play");
				e.target.classList.toggle("pause");
				this.lr.play();
			} else if (e.target.classList.contains("pause")) {
				e.target.classList.toggle("play");
				e.target.classList.toggle("pause");
				this.lr.pause();
			}
		})
	);

	document
		.querySelector("input[name='name']")
		.addEventListener("keydown", (e) => {
			if (e.keyCode == 13 && !!e.target.value.trim()) {
				_name = e.target.value;
				document.querySelector("body").classList.value = "";
				document.querySelector("#name-modal").remove();
				document.querySelector(".banner svg").classList.add("active");
			}
		});
});
