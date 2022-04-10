import {defineStore} from 'pinia'

export const useOwnClashTeamStore = defineStore('own', {
	state: () => ({
		ownTeam: {}
	}),

	getters: {
		name(state) {
			return state.ownTeam.name
		},
		abbreviation(state) {
			return state.ownTeam.abbreviation
		},
		players(state) {
			return state.ownTeam.players
		}
	},

	actions: {
		setTeam(team) {
			this.ownTeam = team
		}
	}
})
