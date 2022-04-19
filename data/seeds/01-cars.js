// STRETCH
const cars = [
    {
    vin: '1111111111111',
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
    },
    {
     vin: '2222222222222',
     make: "toyota",
     model: "prius",
     mileage: 215000,
     title: "clean",
     transmission: "manual",
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
