<template>
  <div class="home">
    <div class="dashboard">
      <div class="company">
        <div class="company_block">
          <h1>GoStartup</h1> 
        </div>
      </div>
      <div class="tasks">
        tasks
      </div>
      <div class="chat">
        chat
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"

import useCompany from '@/composables/company'
import useTasks from '@/composables/tasks'
import useGame from "@/composables/game"
import useChoose from "@/composables/choose"
import useEmployee from "@/composables/employee"

import TaskSlots from '../components/TaskSlots.vue'
import choose from '../components/choose.vue'

const { state_company } = useCompany()
const { getTasks, chooseTask, getPerformedTasks } = useTasks()
const { state_game, nextTick } = useGame()
const { state_choose } = useChoose()
const { promoteEmployee } = useEmployee()

export default {
  name: 'Home',
  components: {
    TaskSlots,
    choose,
  },
  setup() {
    state_company.hire_employee("ceo1", true)

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

    return {
      state_company,

      getTasks,
      chooseTask,
      getPerformedTasks,

      state_game,
      nextTick,

      ceos,
      marketers,
      designers,
      developers,

      state_choose,
      promoteEmployee,
    }
  },
}
</script>
