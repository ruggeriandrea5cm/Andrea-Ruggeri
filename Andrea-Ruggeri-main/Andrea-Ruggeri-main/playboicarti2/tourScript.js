var tourDates = [
    { date: "14/01/2023", location: "Salt Lake City", link: "https://seatgeek.com/playboi-carti-tickets/salt-lake-city-utah-delta-center-1-2024-01-14-7-30-pm/concert/6087605" },
    { date: "15/01/2023", location: "Denver", link: "https://www.ticketmaster.com/event/1E005EDEBCA8561B" },
    // Add more tour dates as needed
];

// La partita viene caricata iniziata quando l'intero contenuto dell'html è stato caricato
document.addEventListener("DOMContentLoaded", setup);

function setup() {
	var table = document.getElementById("tourTable");

	tourDates.forEach(function (event) {
	var row = table.insertRow();
	var cell = row.insertCell();
	cell.innerHTML = event.date + "<br>" + event.location + "<br>" + "<a href='" + event.link + "' target='_blank'><button type='button'>Ticket</button></a><br><br>";});
	console log("ciao");
}


