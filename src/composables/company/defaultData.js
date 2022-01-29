import officesStore from '@/composables/office'
const { offices } = officesStore()


import employee from '@/composables/employee'
const { hireEmployee } = employee()

const default_data = {
    balance: 200000,
    capitalization: 0,
    clients: 4,
    office: offices.garage,
    name: "название",
    productCost: 1000,
    employees: [hireEmployee("ceo")]
}

export default function() {
    return {
        default_data
    }
}