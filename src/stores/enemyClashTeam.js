import {defineStore} from 'pinia'

export const useEnemyClashTeamStore = defineStore('enemy', {
	state: () => ({
		enemyTeam: {
			"id": "00000000-0000-0000-0000-000000000000",
			"tournamentId": 0,
			"name": "ENEMYTEAM",
			"iconId": 0,
			"tier": 2,
			"captain": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
			"abbreviation": "ASS",
			"players": [
				{
					"summonerId": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
					"summonerName": "wieli199",
					"position": "FILL",
					"role": "MEMBER",
					"tier": "BRONZE"
				},
				{
					"summonerId": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
					"summonerName": "wieli199",
					"position": "MIDDLE",
					"role": "MEMBER",
					"tier": "BRONZE"
				},
				{
					"summonerId": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
					"summonerName": "wieli199",
					"position": "UTILITY",
					"role": "CAPTAIN",
					"tier": "BRONZE"
				},
				{
					"summonerId": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
					"summonerName": "wieli199",
					"position": "BOTTOM",
					"role": "MEMBER",
					"tier": "BRONZE"
				},
				{
					"summonerId": "sOJexOctplL-c0zce-TXom35307L2p9DbjAnCFhH7QVlAK0",
					"summonerName": "wieli199",
					"position": "TOP",
					"role": "MEMBER",
					"tier": "BRONZE"
				}
			]
		}
	}),

	getters: {
		name(state) {
			return state.enemyTeam.name
		},
		abbreviation(state) {
			return state.enemyTeam.abbreviation
		},
		players(state) {
			return state.enemyTeam.players
		}
	},

	actions: {
		setTeam(team) {
			this.enemyTeam = team
		}
	}
})
