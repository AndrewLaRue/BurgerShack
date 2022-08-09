import { burgersService } from '../services/BurgersService.js';
import BaseController from '../utils/BaseController';




export class BurgersController extends BaseController {
  constructor() {
    super('/api/burgers')

    this.router
      .get('', this.getBurgers)
      .post('', this.createBurgers)
      .get('/:burgerId', this.getBurgerById)
      .put('/:burgerId', this.editBurger)
      .delete('/:burgerId', this.deleteBurger)
  }


  async getBurgers(req, res, next) {
    try {
      let burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }


  async createBurgers(req, res, next) {
    try {
      let burgerData = req.body

      let burger = await burgersService.createBurger(burgerData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }


  async getBurgerById(req, res, next) {
    try {
      let burger = await burgersService.getBurgerById(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }


  async editBurger(req, res, next) {
    try {
      // don't forget to pass the req.body
      let burger = await burgersService.editBurger(req.params.burgerId, req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }


  async deleteBurger(req, res, next) {
    try {
      let burger = await burgersService.delete(req.params.burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

}
