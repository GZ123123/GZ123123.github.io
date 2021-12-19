document.addEventListener("DOMContentLoaded", function () {
	let gifts = localStorage.getItem("gifts")?.split(",") || [];
	let _name = "Các bạn";

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

	gifts.forEach((i) =>
		document.querySelector(`#gift-${i}`).classList.add("active")
	);

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

	document.querySelectorAll(".gift-item").forEach((n) =>
		n.addEventListener("click", (e) => {
			const target = e.target.closest(".gift-item");
			const index = target.id.split("-").pop();
			if (!target.classList.contains("active")) {
				target.classList.add("active");
				gifts.push(index);
				localStorage.setItem("gifts", gifts.join(","));
			}
		})
	);
});
