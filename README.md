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


### API Endpoints

| HTTP Verbs | Endpoints               | Action                           |
| ---------- | ----------------------- | -------------------------------- |
| GET        | /api/sports             | Gets all teams                   |
| GET        | /api/sports/:teamId     | Gets specific teams based on id  |
| POST       | /api/sports/add-team    | Create a team                    |
| PUT        | /api/sports/:teamId     | Update specific team             |
| DELETE     | /api/sports/:teamId     | To delete a single team          |


API link needed to for data request.
URL:""

API fetch request sample code.
```
const getTeam =

try {
	const response = await fetch(url);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
```

