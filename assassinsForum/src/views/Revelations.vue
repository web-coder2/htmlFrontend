<template>
	<h3 class="text-success">Assassins creed revelations .... Welcome <span class="text-danger">{{ acName }}</span></h3>
	<p class="text-dark">третья часть трилогии Эцио про то как старый Эцио пошел в Масиаф в библиотеку Альтаира чтобы зунать истину. Там на него напали тамплиеры но он их всех поубивал.</p>
	<p class="text-dark">Позже Эцио приплыл в Стамбул там он искал ключи памяти воспоминаний Альтаира находит братство в Стамбуле и уибвает тамплиеров в власти потом приходит в Масиаф и общается с Дезмондом</p>
	<div class="container d-flex">
		<p class="text-info">В 52 года Эцио еще не торопится уходить на покой. Владеет мечом он на 30% быстрее, а крюк позволяет ему с невероятной скоростью перемещаться из одной части города в другую. Кроме того, крюком, как захватом можно цеплять врага, чтобы с легкостью и грациозностью перелететь через него или подцепить им леса и завалить бегущую сзади стражу.
		Ubisoft пообещала оживить картинку, обещая, что даже погода будет влиять на геймплей игры. Картинка будет динамичной, развивающейся и изменяющейся в соответствии с действиями игрока. Ко всему прочему, главные герои истории смогут корчить реалистичные гримасы, выражая свои эмоции с помощью новой технологии Macom. Большая часть игры проходит в Константинополе, который в игре разбит на 4 различных области: Константин, Баязид, Империал и Галата.
		Огромный игровой мир простирается от горной крепости ассасинов времен третьего Крестового похода в городе Масиаф до экзотического Константинополя, бриллианта в короне Османской Империи XVI века. Орлиное Зрение Эцио не потерял и мудрость щедро наградит его Орлиным Чувством, которое позволяет предугадать расположение и последующие действия врага.</p>
		<img src="https://avatars.mds.yandex.net/i?id=2a00000179eecc474bd1320bc8dddfac65d3-4463294-images-thumbs&n=13" class="img-fluid ml-3">
	</div>
	<div class="container">
		<h5>места по которым бродил <span style="color: green; font-family: cursive;">{{ name }}</span>:</h5>
		<ul>
            <li v-for="areal in areals" :key="areal" class="text-primary">{{ areal }}</li>
        </ul>
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
  name: 'revelations',
  data() {
	return {
		name: "Ezio Auditore De Florence"
	}
  },
  methods: {
	changeName() {
		this.$store.commit("changeAcName", this.newAcName)
		this.newAcName = ""
	}
  },
  computed: {
	areals() {
      return this.$store.state.revelationsCity;
    },
	acName() {
		return this.$store.state.assassinName
	}
  }
};

</script>