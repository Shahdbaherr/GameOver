import { Details } from "./details.js";
import { UiHome } from "./uiModules.js";

export class Games {
  constructor() {
    this.getApi("MMORPG");
    this.rowData = document.querySelector(".rowData");
    this.gamesArray = [];
    document.querySelectorAll(".nav-link").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        this.getApi(e.target.innerHTML);
        document.querySelector("nav ul li a.active").classList.remove("active");
        anchor.classList.add("active");
      });
    });
  }

  async getApi(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "09fb7f2a4cmsh47ec580eb6e6a0fp190ed6jsn3a1464e8091d",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const gamesJson = await response.json();
      console.log(gamesJson);
      this.gamesArray = gamesJson;
      let display = new UiHome();
      display.displayData(this.gamesArray);
      this.clickOnItem();
    } catch (error) {
      console.error("Failed to fetch games:", error);
    }
  }

  clickOnItem() {
    document.querySelectorAll(".item").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(id) {
    const details = new Details(id);
    document.querySelector(".display").classList.add("d-none");
    document.querySelector(".detailsContext").classList.remove("d-none");
  }
}
