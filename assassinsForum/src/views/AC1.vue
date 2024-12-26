<template>
	<h3 class="text-success">Assassins creed 1 .... Welcome <span class="text-danger">{{ acName }}</span></h3>
	<p class="text-dark">первая часть этой игры будет про Альтари Ибн Ла Ахада = ассассина из Сирии который был в ордене с рождения и в 24 года стал лидером ассассинов уровня Дай (Дай = звание одних из самых крутых хашишинов)</p>
	<div class="container d-flex">
		<img src="https://avatars.mds.yandex.net/get-entity_search/2269087/952103147/SUx182" class="img-fluid">
		<p class="text-info ml-3">Альтаир Ибн Ла Ахад первый ассассин кого не смогло поработить разум яблоко эдема (высокая квантовая технология первых людей)а так же тот кто полностью изменил все принципы братства после смерти Аль Муалима (который оказался тем же тамплиером) после того как он провалилзадание достать яблоко у Робера Де Сабле его понизили до фидаина (новичка исмаилитов) он искал предателей в Масиафе и бегал по Дамаску убивал (Тамира, Абу Аль Нуквода и Джубаира) по Акре убивал (Гарьне де Наплуз, Монферата и какото параноика) и по Иерусалиму (Талала, пидараса какого то и Робера де сабле) когда он убил Робера тот ему сказал что Аль муалим тоже тамплиер тогда Альтаир пошел в Масиаф где Аль Муалим поработил разум всех жителей и всех ассассинов кроме 5 (Малика (брата Альтаира) и 4 его друзей (Малика) ) они помогли отвлечь на себя одурманеную стражу а Альтаир убил Аль Муалима</p>
	</div>
	<div class="container-fluid d-flex">
		<p class="text-dark">Масиаф в игре Assassin's Creed — горная крепость в Сирии, которая долгое время была домом для Ордена ассасинов. В 1162 году крепость была основана византийцами в долине Оронта, на пересечении торговых путей Хама—Банияс и Антиохия—Хомс. Около 1140 года ассасины приобрели Масиаф и ещё несколько соседних крепостей у крестоносцев, и крепость стала главной крепостью ассасинов в Сирии.
		В 1189 году Масиаф подвергся нападению крестоносцев-тамплиеров. Крепость была захвачена, но усилиями Альтаира Ибн-Ла'Ахада была отбита, а Аль Муалим спасён.
		В 1191 году Аль-Муалим с помощью Яблока Эдема подчинил население города, в том числе и ассасинов, находящихся в крепости. Планы своего повелителя сорвал Альтаир ибн Ла-Ахад, вернув горожан в нормальное состояние. Когда Альтаир взял на себя руководство Орденом, он превратил Масиаф в святилище знаний и исцеления, распахнув двери крепости для новобранцев со всего мира.</p>
		<img src="https://avatars.mds.yandex.net/i?id=2a227ffe6af63166c5e564dd17184bec-5869361-images-thumbs&n=13" class="img-fluid ml-3">
	</div>
	<div class="form-group mt-3">
		<label for="selecter">Выберите город где убьете тамплиера</label>
		<select class="form-control" style="max-width: 80%;" id="selecter" v-model="defaultLocs">
			<option v-for="(item) in ac1Locs">{{ item }}</option>
		</select>
	</div>
	<h4 class="text-dark" v-html="enimies"></h4>
	<input v-model="newAcName" placeholder="input new AC name folower" class="form-control" style="width: 30%;" @keyup.enter="changeName()">
</template>

<style type="text/css">
	@media (max-width:  480px) {
		.d-flex {
			display: block !important;
		}
	}
</style>

<script>

export default {
  name: 'AC1',
  data() {
  	return {
  		ac1Locs: ["Masiaf", "Damascus", "Jerusalim", "Acre", "Ursuf"],
  		defaultLocs: "Damascus",
		newAcName: "",
    	}
	},
  computed: {
  	enimies() {
  		if (this.defaultLocs == "Damascus") {
  			return `Запоминай твои враги: <span class="text-danger">Тамир, Абу аль Нуквод, Джубаир</span>`
  		} else if (this.defaultLocs == "Jerusalim") {
  			return `В Иерусалиме ты должен убить: <span class="text-danger">Таллала и Робера де Сабле</span>`
  		} else if (this.defaultLocs == "Acre") {
  			return `Твои враги: <span class="text-danger">Гарнье де Наплуз, Монферат и Арсул</span>`
  		} else {
  			return `Твой враг не только <span class="text-success"> Робер де Сабле </span> был но и <span class="text-warning"> Аль Муалим </span>`
  		}
  	},
	acName() {
		return this.$store.state.assassinName
	}
  },
  methods: {
	changeName() {
		this.$store.commit("changeAcName", this.newAcName)
		this.newAcName = ""
	}
  }
};

</script>