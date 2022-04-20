<template>
	<q-menu
		touch-position
		context-menu
	>

		<q-list dense style="min-width: 100px">
			<q-item clickable>
				<q-item-section>{{ $t("menu.darkModeSetting") }}</q-item-section>
				<q-item-section side>
					<q-icon name="keyboard_arrow_right"/>
				</q-item-section>

				<q-menu anchor="top end" self="top start">
					<q-list>
						<q-item
							v-for="item in darkMode"
							:key="item"
							dense
							clickable
						>
							<q-radio v-model="selectedDarkModeValue" :val="item" :label="item"/>
						</q-item>
					</q-list>
				</q-menu>

			</q-item>


			<q-item clickable>
				<q-item-section>{{ $t("menu.theme") }}</q-item-section>
				<q-item-section side>
					<q-icon name="keyboard_arrow_right"/>
				</q-item-section>

				<q-menu anchor="top end" self="top start">
					<q-list>
						<q-item
							dense
							clickable
							v-for="themeMode in themes"
							:key="themeMode"
						>
							<q-item-section>{{ themeMode.name }}</q-item-section>
							<q-item-section side>
								<q-icon name="keyboard_arrow_right"/>
							</q-item-section>
							<q-menu auto-close anchor="top end" self="top start">
								<q-list>
									<q-item
										v-for="theme in themeMode.values"
										:key="theme.name"
										dense
										clickable
										@click="setTheme(theme)"
									>
										<q-item-section>{{ theme.name }}</q-item-section>
									</q-item>
								</q-list>
							</q-menu>
						</q-item>
					</q-list>
				</q-menu>

			</q-item>

			<q-separator class="q-my-sm"></q-separator>

			<q-item>
				<q-select
					v-model="locale"
					:options="localeOptions"
					:label="$t('menu.language')"
					dense
					borderless
					emit-value
					map-options
					options-dense
					class="full-width"
				/>
			</q-item>
		</q-list>

	</q-menu>
</template>

<script>
import {ref, watch} from "vue"
import {setCssVar, useQuasar} from 'quasar'
import {useI18n} from "vue-i18n"

export default {
	name: 'Menu',
	setup() {
		const $q = useQuasar()

		const darkMode = ["Auto", "Dark", "Light"]
		const themes = [
			{
				"name": "Basic Color Schemes",
				"values": [
					{
						"name": "Blue",
						"primary": "#0288D1",
						"secondary": "#0277BD",
						"accent": "#01579B",

						"dark": "#0D47A1",
						"dark1": "#1565C0",
						"dark2": "#1976D2",
						"dark3": "#1E88E5",
						"light": "#BBDEFB",
						"light1": "#90CAF9",
						"light2": "#64B5F6",

						"positive": "#69F0AE",
						"negative": "#FF6E40",
						"info": "#E040FB",
						"warning": "#FFD740",
					},
					{
						"name": "Red",
						"primary": "#C2185B",
						"secondary": "#AD1457",
						"accent": "#880E4F",

						"dark": "#B71C1C",
						"dark1": "#C62828",
						"dark2": "#D32F2F",
						"dark3": "#E53935",
						"light": "#FFCDD2",
						"light1": "#EF9A9A",
						"light2": "#E57373",

						"positive": "#69F0AE",
						"negative": "#7C4DFF",
						"info": "#E040FB",
						"warning": "#FFD740",
					},
					{
						"name": "Green",
						"primary": "#00796B",
						"secondary": "#00695C",
						"accent": "#004D40",

						"dark": "#1B5E20",
						"dark1": "#2E7D32",
						"dark2": "#388E3C",
						"dark3": "#43A047",
						"light": "#C8E6C9",
						"light1": "#A5D6A7",
						"light2": "#81C784",

						"positive": "#B2FF59",
						"negative": "#FF6E40",
						"info": "#E040FB",
						"warning": "#FFD740",
					},
					{
						"name": "Yellow",
						"primary": "#AFB42B",
						"secondary": "#9E9D24",
						"accent": "#827717",

						"dark": "#F57F17",
						"dark1": "#F9A825",
						"dark2": "#FBC02D",
						"dark3": "#FDD835",
						"light": "#FFF9C4",
						"light1": "#FFF59D",
						"light2": "#FFF176",

						"positive": "#B2FF59",
						"negative": "#FF6E40",
						"info": "#E040FB",
						"warning": "#69F0AE",
					},
					{
						"name": "Purple",
						"primary": "#512DA8",
						"secondary": "#4527A0",
						"accent": "#311B92",

						"dark": "#4A148C",
						"dark1": "#6A1B9A",
						"dark2": "#7B1FA2",
						"dark3": "#8E24AA",
						"light": "#E1BEE7",
						"light1": "#CE93D8",
						"light2": "#BA68C8",

						"positive": "#B2FF59",
						"negative": "#FF6E40",
						"info": "#448AFF",
						"warning": "#69F0AE",
					}
				],
			},

			{
				"name": "Popular Color Schemes",
				"values": [
					{
						"name": "Dracula",
						"primary": "#6272A4",
						"secondary": "#51608f",
						"accent": "#44527e",

						"dark": "#282A36",
						"dark1": "#363948",
						"dark2": "#434657",
						"dark3": "#4f5265",
						"light": "#F8F8F2",
						"light1": "#eaeae1",
						"light2": "#e0e0d4",

						"positive": "#50FA7B",
						"negative": "#FF5555",
						"info": "#BD93F9",
						"warning": "#F1FA8C",
					},
					{
						"name": "Material 3",
						"primary": "#82B1FF",
						"secondary": "#448AFF",
						"accent": "#3D5AFE",

						"dark": "#1b1b1d",
						"dark1": "#252528",
						"dark2": "#2e2e33",
						"dark3": "#33333a",
						"light": "#FFFFFF",
						"light1": "#fdfbff",
						"light2": "#f3f1f6",

						"positive": "#B2FF59",
						"negative": "#FF6E40",
						"info": "#448AFF",
						"warning": "#FFD740",
					},
					{
						"name": "Nord",
						"primary": "#88c0d0",
						"secondary": "#8fbcbb",
						"accent": "#81a1c1",

						"dark": "#2e3440",
						"dark1": "#3b4252",
						"dark2": "#434c5e",
						"dark3": "#4c566a",
						"light": "#eceff4",
						"light1": "#e5e9f0",
						"light2": "#d8dee9",

						"positive": "#a3be8c",
						"negative": "#bf616a",
						"info": "#b48ead",
						"warning": "#ebcb8b",
					},
					{
						"name": "Solarized",
						"primary": "#88c0d0",
						"secondary": "#8fbcbb",
						"accent": "#81a1c1",

						"dark": "#002b36",
						"dark1": "#073642",
						"dark2": "#586e75",
						"dark3": "#657b83",
						"light": "#fdf6e3",
						"light1": "#eee8d5",
						"light2": "#e1dbc7",

						"positive": "#859900",
						"negative": "#dc322f",
						"info": "#6c71c4",
						"warning": "#b58900",
					}
				]
			}
		]


		const setDarkMode = () => {
			if (selectedDarkModeValue.value === "Auto") $q.dark.set("auto")
			if (selectedDarkModeValue.value === "Dark") $q.dark.set(true)
			if (selectedDarkModeValue.value === "Light") $q.dark.set(false)
		}

		let selectedDarkModeValue = ref("Auto")
		if ($q.localStorage.getItem("darkMode")) {
			selectedDarkModeValue.value = $q.localStorage.getItem("darkMode")
		}
		setDarkMode()

		watch(selectedDarkModeValue, () => {
			$q.localStorage.set("darkMode", selectedDarkModeValue.value)
			setDarkMode()
		})


		const setTheme = (theme) => {
			selectedTheme.value = theme.name
			$q.localStorage.set("theme", selectedTheme.value)

			applyTheme(getValuesOfTheme(selectedTheme.value))
		}


		const getValuesOfTheme = (selectedTheme) => {
			for (const themeCategoryIndex in themes) {
				for (const themeIndex in themes[themeCategoryIndex].values) {
					if (themes[themeCategoryIndex].values[themeIndex].name === selectedTheme) {
						let selectedThemeWithOnlyValues = Object.assign({}, themes[themeCategoryIndex].values[themeIndex])
						delete selectedThemeWithOnlyValues.name
						return selectedThemeWithOnlyValues
					}
				}
			}
		}

		const applyTheme = (valuesObject) => {
			for (const [key, value] of Object.entries(valuesObject)) {
				setCssVar(key, value)
			}
		}


		let selectedTheme = ref("Nord")
		if ($q.localStorage.getItem("theme")) {
			selectedTheme.value = $q.localStorage.getItem("theme")
		}
		applyTheme(getValuesOfTheme(selectedTheme.value))






		const {locale} = useI18n({useScope: 'global'})
		const localeOptions = [
			{value: 'en-US', label: 'English'},
			{value: 'de-DE', label: 'German'},
			{value: 'de-AT', label: 'Austrian'},
		]

		if ($q.localStorage.getItem("locale")) {
			locale.value = $q.localStorage.getItem("locale")
		}

		watch(locale, () => {
			$q.localStorage.set("locale", locale.value)
		})

		return {
			selectedDarkModeValue,
			darkMode,
			themes,
			setTheme,

			locale,
			localeOptions

		}
	}
}
</script>
