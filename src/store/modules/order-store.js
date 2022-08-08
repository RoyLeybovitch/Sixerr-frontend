import { orderService } from "../../services/order.service.js";
import router from "../../router";

export default {
  state: {
    orders: [],
    isBuyer: true,
  },
  getters: {
    getorders(state) {
      return state.orders;
    },
    getIsBuyer(state) {
      return state.isBuyer;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
    setIsBuyer(state, { isBuyer }) {
      state.isBuyer = isBuyer;
    },
    addOrder(state, { order }) {
      state.orders.push(order);
    },
  },
  actions: {
    async getorders({ commit }, { filterBy }) {
      try {
        const orders = await orderService.query(filterBy);
        commit({
          type: "setOrder",
          orders,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async addOrder({ commit }, { order }) {
      try {
        const savedOrder = await orderService.save(order);
        commit({ type: "addOrder", savedOrder });
        return savedOrder;
      } catch (err) {
        console.log("Err in adding order", err);
      }
    },
    async getOrdersById({ commit }, { filterBy }) {
      try {
        commit({ type: "setIsBuyer", filterBy });
        const orders = await orderService.query(filterBy);
        commit({ type: "setOrders", orders });
        return orders;
      } catch (error) {}
    },
  },
};
