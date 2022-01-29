import officesStore from '@/composables/office'
const { offices } = officesStore()


import employee from '@/composables/employee'
const { hireEmployee } = employee()

const default_data = {
    balance: 200000,
    capitalization: 0,
    clients: 0,
    office: offices.garage,
    name: "название",
    productCost: 10,
    employees: [hireEmployee("ceo")]
}

export default function() {
    return {
        default_data
    }
}