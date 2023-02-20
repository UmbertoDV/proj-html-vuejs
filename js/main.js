const { createApp } = Vue;

createApp({
	data() {
		return {
			headerObj: {
				images: [
					{
						cocaCola: "./img/assets/sponsor1.png",
						nike: "./img/assets/sponsor2.png",
						footballClub: "./img/assets/loader-football.png",
						facebook: "./img/assets/facebook.svg",
						instagram: "./img/assets/instagram.svg",
						twitter: "./img/assets/twitter.svg",
					},
				],
				text: [
					{
						first: "HOME",
						second: "FIXTURES & RESULT",
						third: "LEAGUE TABLE",
						fourth: "PLAYERS",
						fifth: "GALLERY",
						sixth: "BLOG",
						seventh: "CONTACT",
					},
				],
			},
			carouselObj: {
				images: [
					"./img/assets/slider1.jpg",
					"./img/assets/slider2.jpg",
					"./img/assets/slider3.jpg",
					"./img/assets/slider4.jpg",
				],
				activeImage: 0,
			},
		};
	},
	methods: {
		prevImage() {
			if (this.carouselObj.activeImage - 1 < 0) {
				this.carouselObj.activeImage = this.carouselObj.images.length - 1;
			} else {
				this.carouselObj.activeImage--;
			}
		},
		nextImage() {
			if (this.carouselObj.activeImage >= this.carouselObj.images.length - 1) {
				this.carouselObj.activeImage = 0;
			} else {
				this.carouselObj.activeImage++;
			}
		},
	},
	mounted() {
		setInterval(this.nextImage, 3000);
	},
}).mount("#app");
