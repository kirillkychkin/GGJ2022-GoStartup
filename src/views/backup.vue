<template>
  <div class="home">
    <div class="dashboard">
      <div class="block">
        <h2>
          Данные компании:
        </h2>
        Доля основателя: {{ state_company.share }} <br/>
        Доля инвесторов: {{ state_company.investors_share }} <br/>
        Название компании: {{ state_company.name }} <br/>
        Зарплаты: {{ state_company.salaries() }} <br/>
        Аренда офиса: {{ state_company.office_rent() }} <br/>
        Расходы от тасков: {{ state_company.task_expenses() }} <br/>
        Текущая капитализация: {{ state_company.capitalization }} <br/>
        Текущий баланс: {{ state_company.balance }} <br/>
        Ожидаемый доход: {{ state_company.income() }} <br/>
        Клиенты: {{ state_company.clients }} <br/>
        <div class="card-grey">
          Офис: {{ state_company.office.name }} <br/>
          Вмещает сотрудников: {{ state_company.office.size }} <br/>
          Стоимость офиса (входит в расходы): {{ state_company.office.expenses }} <br/>
          <button @click="state_company.changeOffice()">
            Поменять офис
          </button>
        </div>
      </div>
      <div class="block">
        <h2>
          Доступные задания:
        </h2>
        <!-- Здесь 1 - передаваемый аргумент стадии -->
        <div class="card-grey" v-for="task in getTasks(state_game.stage)" :key="task.id" :class="{ 'active': task.active }">
          Название: {{ task.name }} <br/>
          Описание: {{ task.desc }} <br/>
          Тип: {{ task.type }} <br/>
          Время на выполнение: {{ task.time }} недели <br/>
          Нужные сотрудники: <div v-html="task.roles_string"></div>
          Сложность: {{ task.complexity }} <br/>
          Доп расходы в неделю: {{ task.additional_expenses }} <br/>
          Награда: {{ task.reward }} <br/>
          
          <button @click="chooseTask(task, true)">
            Выполнять
          </button>
        </div>
      </div>
      <div class="wide-block">
        <h2>
          Выполняемые задания:
        </h2>
        <div class="card-grey" v-for="task in getPerformedTasks(0)" :key="task.id">
          Название: {{ task.name }} <br/>
          Описание: {{ task.desc }} <br/>
          Тип: {{ task.type }} <br/>
          Время на выполнение: {{ task.time }} недели <br/>
          Текущий прогресс: {{ task.progress }} недели <br/>
          Сложность: {{ task.complexity }} <br/>
          Доп расходы в неделю: {{ task.additional_expenses }} <br/>
          Награда: {{ task.reward }} <br/>
          Назначенные сотрудники: 
          <task-slots :required_roles="task.required_roles" :passed_task="task">
          </task-slots>
          <!--
          <div v-for="employee in task.required_roles" :key="employee.id" class="active">
          </div>
          -->
          <button @click="chooseTask(task, false)">
            Прекратить выполнять
          </button>
        </div>
      </div>
      <div class="block">
        <h2>
          Игровые данные:
        </h2>
        <div>
          Ход: {{ state_game.tick }} <br/>
          Этап: {{ state_stages[state_game.stage].name }} <br/>
          <button @click="nextTick">
            Следующий ход
          </button>
        </div>
      </div>
      <div class="wide-block">
        <h2>
          Сотрудники:
        </h2>
        <div>
          <div class="flex">
            <h4>CEO</h4>
            <div v-for="employee in ceos" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
              Выполняет: {{ employee.assigned_task }}
              <div v-if="employee.promotion.can_promote">
                Стоимость повышения: {{ employee.promotion.cost }}
                <button @click="promoteEmployee(employee,state_company)">
                  Повысить
                </button>
              </div>
            </div>
          </div>
          <div class="flex">
            <h4>Marketer</h4>
            <div v-for="employee in marketers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
              Выполняет: {{ employee.assigned_task }}
              <div v-if="employee.promotion.can_promote">
                Стоимость повышения: {{ employee.promotion.cost }}
                <button @click="promoteEmployee(employee,state_company)">
                  Повысить
                </button>
              </div>
            </div>
          </div>
          <div class="flex">
            <h4>Designer</h4>
            <div v-for="employee in designers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
              Выполняет: {{ employee.assigned_task }}
              <div v-if="employee.promotion.can_promote">
                Стоимость повышения: {{ employee.promotion.cost }}
                <button @click="promoteEmployee(employee,state_company)">
                  Повысить
                </button>
              </div>
            </div>
          </div>
          <div class="flex">
            <h4>Developer</h4>
            <div v-for="employee in developers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
              Выполняет: {{ employee.assigned_task }}
              <div v-if="employee.promotion.can_promote">
                Стоимость повышения: {{ employee.promotion.cost }}
                <button @click="promoteEmployee(employee,state_company)">
                  Повысить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wide-block">
        <h2>
          Нанять сотрудников:
        </h2>
        <div>
          <div class="flex">
            <h4>Marketer</h4>
            <button @click="state_company.hire_employee('marketer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('marketer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('marketer3')">
              Tier 3
            </button>
          </div>
          <div class="flex">
            <h4>Designer</h4>
            <button @click="state_company.hire_employee('designer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('designer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('designer3')">
              Tier 3
            </button>
          </div>
          <div class="flex">
            <h4>Developer</h4>
            <button @click="state_company.hire_employee('developer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('developer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('developer3')">
              Tier 3
            </button>
          </div>
        </div>
      </div>
    </div>
    <choose v-if="state_choose.show">
    </choose>
    <choose-office v-if="state_office.show">
    </choose-office>
  </div>
</template>

<script>
import { computed } from "vue"

import useCompany from '@/composables/company'
import useTasks from '@/composables/tasks'
import useGame from "@/composables/game"
import useStages from "@/composables/stages"
import useChoose from "@/composables/choose"
import useEmployee from "@/composables/employee"

import officesStore from '@/composables/office'
const { state_office} = officesStore()

import TaskSlots from '../components/TaskSlots.vue'
import choose from '../components/choose.vue'
import ChooseOffice from '../components/ChooseOffice.vue'

const { state_company } = useCompany()
const { state_stages } =  useStages()
const { getTasks, chooseTask, getPerformedTasks } = useTasks()
const { state_game, nextTick } = useGame()
const { state_choose } = useChoose()
const { promoteEmployee } = useEmployee()

export default {
  name: 'Home',
  components: {
    TaskSlots,
    choose,
    ChooseOffice,
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

      state_office,
      state_stages,
    }
  },
}
</script>
