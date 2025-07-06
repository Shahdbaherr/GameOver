import { UiHome } from "./uiModules.js";

export class Details{
    constructor(gameId){
		this.display = new UiHome();
		this.detailsArray={};
		this.getDetailsApi(gameId);
	}
	async getDetailsApi(idGames){
		const options = {
		   method: "GET",
		   headers: {
			  'x-rapidapi-key': 'f971ccf762mshec73ae05ef51d8ep1f4af6jsn2a19c142a112',
		      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
		   },
		};
		let detailsApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
		let detailsJson = await detailsApi.json();
		this.detailsArray = detailsJson;
			console.log(this.detailsArray);
		this.display.gameDetails(this.detailsArray);
		this.closeBtn();
	};


	closeBtn(){
		document.querySelector('.btn-close').addEventListener('click' ,()=>{
			document.querySelector(".detailsContext").classList.add("d-none");
			document.querySelector(".display").classList.remove("d-none");
		})
	}
};