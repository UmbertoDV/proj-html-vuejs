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
		};
	},
	created() {
		console.log(this.headerObj);
	},
}).mount("#app");
