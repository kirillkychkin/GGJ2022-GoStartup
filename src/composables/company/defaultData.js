import officesStore from '@/composables/office'
const { offices } = officesStore()

const default_data = {
    balance: 200000,
    capitalization: 0,
    clients: 4,
    office: offices.garage,
    name: "название",
    productCost: 300,
    employees: []
}

export default function() {
    return {
        default_data
    }
}