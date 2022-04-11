<template>
	<iframe :src="'https://euw.op.gg/multisearch/euw?summoners=' + playersForUrl" title="W3Schools Free Online Web Tutorials"></iframe>
</template>

<script>
export default {
	name: "ClashTeamMultiSearch",
	props: ["team"],
	setup(props) {
		let playersForUrl = ""

		for (let player of props.team.players) {
			playersForUrl += player.summonerName + ", "
		}

		return {playersForUrl}
	}
}
</script>

<style scoped>
iframe {
	height: 1000px !important;
}
</style>
