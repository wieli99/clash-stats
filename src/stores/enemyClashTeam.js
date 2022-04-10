import {defineStore} from 'pinia'

export const useEnemyClashTeamStore = defineStore('enemy', {
	state: () => ({
		enemyTeam: {},
		displayEnemyTeamSkeleton: false
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
		},
		setDisplayEnemyTeamSkeleton(bool) {
			this.displayEnemyTeamSkeleton = bool
		}
	}
})
