<template>
	<h3 class="text-success">Assassins creed brotherhood (developed by <span class="text-danger">{{ coderName }}</span>)</h3>
	<p class="text-dark">Это вторая часть про Эцио тут он отдыхает в своей виле Монтериджони а потом на эту вилу нападют тамплиеры с Борджия они падлы ебаные убивают его дядю и хуярят вилу потом Эцио приходит в Рим начинает отстаривать его бонусами и убивает служащих борджие тамплиерова потом и его самого</p>
	<div class="container d-flex">
		<img src="https://avatars.mds.yandex.net/i?id=7437ae4e13d5b9ea983740c87f18bae6735c68ff-5022489-images-thumbs&n=13" class="img-fluid">
		<p class="text-info ml-3">Assassin’s Creed: Brotherhood — компьютерная игра в жанре action-adventure и стелс-экшена с видом от третьего лица. Разработана компанией Ubisoft Montreal для платформ Windows, Xbox 360 и PlayStation 3.
		События игры развиваются в конце XV — начале XVI века. Действие в сегодняшнем времени происходит на территории Италии. 1 Assassin’s Creed: Brotherhood является прямым сиквелом игры Assassin's Creed II. Сюжет развивается непосредственно после окончания событий оригинальной игры. Главным героем игры является итальянский дворянин-ассасин Эцио Аудиторе да Фиренце, который продолжает свою борьбу с орденом тамплиеров в Риме. 1 Assassin’s Creed: Brotherhood — первая игра серии, в которой реализован многопользовательский режим. В игре представлен 21 класс персонажей, у каждого из которых имеется своя особая техника убийства и свой комплекс навыков и оружия.</p>
	</div>
	<div class="mt-4">
		<h4 class="text-success">Ezio killed (tampliers)</h4>
		<div class="d-flex">
			<div>
				<p v-for="i in countKillsBrotherhood">{{ i }} <span class="text-danger">Тамплиеров</span></p>
			</div>
			<div class="ml-5">
                <p v-for="i in sortedCounts">{{ i }} <span class="text-warning">Целей</span></p>
            </div>
			<div class="ml-5">
                <p v-for="i in evenCounts">{{ i }} <span class="text-primary">жертв</span></p>
            </div>
		</div>
	</div>
</template>

<style type="text/css">
	@media (max-width:  480px) {
		.d-flex {
			display: block !important;
		}
	}
</style>

<script>

import { mapState } from 'vuex';
	export default {
		name: 'brotherhood',
		data() {
			return {
				killsBrotherhood: []
			};
		},
		computed: {
			countKillsBrotherhood() {
				return this.$store.state.killArray;
			},
			sortedCounts() {
                return this.$store.getters.sortedArray
            },
			evenCounts() {
				return this.$store.getters.evenNumbers 
			},
			coderName() {
				return this.$store.state.assassa
			}
		}
	};

</script>