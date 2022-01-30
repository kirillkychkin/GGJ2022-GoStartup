<template>
  <div class="choose-office">
    Выбор офиса
    <div class="flex">
      <div v-for="office in offices" :key="office" class="office" @click="changeOffice()">
        {{ office.name }}
      </div>
    </div>
    <button class="close" @click="state_office.show = false">
      Закрыть
    </button>
  </div>
</template>

<script>
import officesStore from '@/composables/office'
const { offices, state_office} = officesStore()

function changeOffice() {
  console.log("pick new")
}

export default {
  name: 'choos-officee',
  components: {
  },
  setup() {
    return {
      offices,
      state_office,
      changeOffice,
    }
  },
}
</script>
