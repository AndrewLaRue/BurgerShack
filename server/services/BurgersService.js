import { FAKE_DB } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

// theses will all need to be async/await once a real database is involved.

  getBurgers() {
    return FAKE_DB.burgers
  }

  createBurger(burgerData) {
    burgerData.id = FAKE_DB.burgers.length
    FAKE_DB.burgers.push(burgerData)
    return burgerData
  }

  async getBurgerById(burgerId) {
    let burger = FAKE_DB.burgers.find(b => b.id == burgerId)

    if (!burger) {
      throw new BadRequest("Invalid Id")
    }
    return burger
  }

  async editBurger(burgerId, burgerData) {
    let burger = await this.getBurgerById(burgerId)

    burger.name = burgerData.name || burger.name
    burger.price = burgerData.price || burger.price

    // will need a save function here
    return burger
  }

  async delete(burgerId) {
    let burger = await this.getBurgerById(burgerId)
    // check this ignore
    // @ts-ignore
    let burgerIndex = FAKE_DB.burgers.indexOf(burger)
    FAKE_DB.burgers.splice(burgerIndex, 1)

    return burger
  }

}
 
export const burgersService = new BurgersService() 