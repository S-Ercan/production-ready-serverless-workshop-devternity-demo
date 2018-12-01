const { expect } = require('chai')
const { init } = require('../steps/init')
const when = require('../steps/when')

describe(`When we invoke the POST /restaurants/search endpoint with theme 'cartoon'`, () => {
    before(async () => await init())

    it(`Should return an array of 4 restaurants`, async () => {
        let res = await when.we_invoke_search_restaurants('cartoon')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(4)

        for (let restaurant of res.body) {
            expect(restaurant).to.have.property('name')
            expect(restaurant).to.have.property('image')
        }
    })
})

describe(`When we invoke the POST /restaurants/search endpoint with theme 'true blood'`, () => {
    before(async () => await init())

    it(`Should return an array of 1 restaurant`, async () => {
        let res = await when.we_invoke_search_restaurants('true blood')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(1)

        for (let restaurant of res.body) {
            expect(restaurant).to.have.property('name')
            expect(restaurant).to.have.property('image')
        }
    })
})

describe(`When we invoke the POST /restaurants/search endpoint with theme 'netflix'`, () => {
    before(async () => await init())

    it(`Should return an array of 2 restaurants`, async () => {
        let res = await when.we_invoke_search_restaurants('netflix')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(2)

        for (let restaurant of res.body) {
            expect(restaurant).to.have.property('name')
            expect(restaurant).to.have.property('image')
        }
    })
})

describe(`When we invoke the POST /restaurants/search endpoint with theme 'invalid'`, () => {
    before(async () => await init())

    it(`Should return an array of 0 restaurants`, async () => {
        let res = await when.we_invoke_search_restaurants('invalid')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(0)
    })
})

describe(`When we invoke the POST /restaurants/search endpoint with theme 'rick and morty'`, () => {
    before(async () => await init())

    it(`Should return an array of 4 restaurants`, async () => {
        let res = await when.we_invoke_search_restaurants('rick and morty')

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(4)
    })
})

describe(`When we invoke the POST /restaurants/search endpoint with theme 'rick and morty' and limit 2`, () => {
    before(async () => await init())

    it(`Should return an array of 1 restaurant`, async () => {
        let res = await when.we_invoke_search_restaurants('rick and morty', 2)

        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.lengthOf(1)
    })
})