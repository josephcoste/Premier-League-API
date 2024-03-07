# Premier League API

This is a free Premier league rankings API for the top 20 teams of the seasons.

API endpoint "teams".

API link needed to for data request.

API fetch request sample code.

const getTeam ="";// insert URL api link to fetch;

try {
	const response = await fetch(url);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}//Code to make the API give data.

