const form = document.querySelector('#f1dataform');
console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;

    console.log(event);
    console.log(season, round);

    requestData(season, round);
})

let requestData = async (season, round) => {
     {  let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
        console.log(response.status);
        console.log(response.data);
        
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position);
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName);
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName);
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality);
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points);
        console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId);
        

        driverData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        response.data.driverData
     }
    }

