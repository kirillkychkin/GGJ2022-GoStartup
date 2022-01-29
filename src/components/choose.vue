<template>
  <div class="choose">
    Нужен: {{ employee }}
  </div>
  <select v-model="select.selected" @change="onSelect()">
    <option v-for="option in options" v-bind:value="option" :key="option" :disabled="option.disabled">
      {{ option.type }}
    </option>
  </select>
  <span>Выбрано: {{ select.selected }}</span>
</template>

<script>
import { reactive, computed } from "vue"

import useCompany from '@/composables/company'

const { state_company } = useCompany()

export default {
  name: 'choose',
  components: {
  },
  props: {
    employee: String
  },
  setup() {
    const select = reactive({
      selected: ""
    })

    const options = computed(() => {
      let options = [
          {
            disabled: true,
            type: "Сотрудники:"
          },
          ...state_company.available_employees,
          {
            disabled: true,
            type: "Фрилансеры:"
          },
      ]
      return options
    })

    function onSelect() {
      select.selected.assigned_task = "something"
    }

    return {
      select,
      options,
      onSelect,
    }
  },
}
</script>
