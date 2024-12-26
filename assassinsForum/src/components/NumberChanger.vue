<template>

    <div class="container">
        <input v-model="inputNumber" type="number" placeholder="input a new number value" class="form-control" style="width: 30%;" @keyup.enter="changeNumber()">
    </div>

</template>

<script>

    export default {
        name: "NumberChanger",
        data() {
            return {
                inputNumber: 0,
            }
        },
        methods: {
            async changeNumber() {
                await this.$store.dispatch("changeNumber", this.inputNumber)
                this.inputNumber = ""
            }
        }
    }

</script>