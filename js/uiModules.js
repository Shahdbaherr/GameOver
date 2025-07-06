export class UiHome{
    displayData(gamesArray){
        let cartona = '';
        for(let i=0 ; i<gamesArray.length ; i++){
            let x = gamesArray[i].short_description;
            cartona+=`
            <div data-id="${gamesArray[i].id}" class="col-lg-3 item">
                <div class="p-2 border border-1 border-dark rounded-2">
                    <img src="${gamesArray[i].thumbnail}" class=" w-100 p-1 object-fit-cover rounded-3 mb-2" alt="#">
                    <div class="card bg-transparent border-0 text-light">
                        <div class="d-flex justify-content-between">
                            <h3 class="h6">${gamesArray[i].title}</h3>
                            <button class="btn btn-primary">Free</button>
                        </div>
                      <p class="text-center py-3 px-4">${x.slice(0,30)}</p>
                    </div>
                    <div class="border-top border-1 border-dark pt-2 d-flex justify-content-between">
                    <span class="btn btn-dark">${gamesArray[i].genre}</span>
                    <span class="btn btn-dark">${gamesArray[i].platform}</span>
                </div>
                </div>
            </div>
            `
        }
        document.querySelector('.rowData').innerHTML = cartona;
    }

    gameDetails(detailsArray){
        let gameData = ""
        
        gameData += `
        <header class="d-flex justify-content-between">
            <h1>Details Game</h1>
            <button id="closeBtn" class="btn-close btn-close-white"></button>
        </header>
        <section>
            <div class="container">
            <div class="row rowDetails px-2">
            <img src="${detailsArray.thumbnail}" class="col-lg-4 align-self-lg-start object-fit-contain top-0" alt="#">
            <div class="col-lg-8">
                <h2>title: ${detailsArray.title}</h2>
                <p class="fs-5">category: <span class="btn px-2 btn-primary">${detailsArray.genre}</span></p>
                <p class="fs-5">platform: <span class="btn px-2 btn-primary">${detailsArray.platform}</span></p>
                <p class="fs-5">status: <span class="btn px-2 btn-primary">${detailsArray.status}</span></p>
                <p class="fs-6">${detailsArray.short_description}</p>
                <a class="btn btn-outline-warning p-2" href="${detailsArray.game_url}">show game</a>
            </div>
            </div>
            </div>
        </section>
       
        `
        document.querySelector('.detailsContext').innerHTML = gameData;
    }
}