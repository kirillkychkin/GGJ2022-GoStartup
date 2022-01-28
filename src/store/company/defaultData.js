import officesStore from '@/store/office'
const { offices } = officesStore()


import employee from '@/store/employee'
const { hireEmployee } = employee()

const default_data = {
    balance: 200000,
    capitalization: 0,
    clients: 0,
    office: offices.garage,
    name: "Super company",
    employees: [hireEmployee("ceo")]
}

export default function() {
    return {
        default_data
    }
}