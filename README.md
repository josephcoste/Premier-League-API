# Premier League API

This is a free Premier league rankings API for the top 20 teams of the seasons.
### Team Schema

| Field       | Type   | Description                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------------- |
|   Name      | String | The name of the team                                                              |
|  ranking    | String | Team postion number                                                               |
|  captain    | String | Leader of the team                                                                |
|  banner     | String | Team logo                                                                         |
|  founded    | String | Year the team was created                                                         |
|  stadium    | String | Stadium location                                                                  |


API endpoint "teams".

API link needed to for data request.
```
API fetch request sample code.

const getTeam ="";// insert URL api link to fetch;

try {
	const response = await fetch(url);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}//Code to make the API give data.
```

