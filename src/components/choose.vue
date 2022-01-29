<template>
  <div class="choose">
    Нужен: {{ role_parsed }} <br/>
    Требуемый уровень: {{ tier_parsed }}

    <div v-if="role_parsed == 'ceo'" class="flex">
      <div v-for="emp in ceos" :key="emp" class="employee" @click="pickEmployee(emp)">
        {{ emp.type }}
      </div>
    </div>

    <div v-if="role_parsed == 'marketer'" class="flex">
      <div v-for="emp in marketers" :key="emp" class="employee" @click="pickEmployee(emp)">
        {{ emp.type }}
      </div>
    </div>
    
    <div v-if="role_parsed == 'designer'" class="flex">
      <div v-for="emp in designers" :key="emp" class="employee" @click="pickEmployee(emp)">
        {{ emp.type }}
      </div>
    </div>
    
    <div v-if="role_parsed == 'developer'" class="flex">
      <div v-for="emp in developers" :key="emp" class="employee" @click="pickEmployee(emp)">
        {{ emp.type }}
      </div>
    </div>
    
    <button class="close" @click="state_choose.show = false">
      Закрыть
    </button>
    <!--
    Нужны: {{ employee }}
    -->
  </div>
  <!--
  <select v-model="select.selected" @change="onSelect()">
    <option v-for="option in options" v-bind:value="option" :key="option" :disabled="option.disabled">
      {{ option.type }}
    </option>
  </select>
  <span>Выбрано: {{ select.selected }}</span>
  -->
</template>

<script>
import { computed } from "vue"
import useChoose from "@/composables/choose"
const { state_choose, pickEmployee } = useChoose()
import useCompany from '@/composables/company'

const { state_company } = useCompany()
/*

import taskList from '@/composables/tasks/taskList'
const { task_list } = taskList()
*/
export default {
  name: 'choose',
  components: {
  },
  props: {
    role: String,
  },
  setup() {
    let position = state_choose.role
    let role_parsed = position.substring(0, position.length-1)
    let tier_parsed = parseInt(position.substring(position.length-1))

    const ceos = computed(() => {
      return state_company.filter_roles("ceo")
    })

    const marketers = computed(() => {
      return state_company.filter_roles("marketer")
    })

    const designers = computed(() => {
      return state_company.filter_roles("designer")
    })

    const developers = computed(() => {
      return state_company.filter_roles("developer")
    })
    /*
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

    */
    return {
      state_choose,
      ceos,
      marketers,
      designers,
      developers,

      role_parsed,
      tier_parsed,

      pickEmployee,
    }
  },
}
</script>
