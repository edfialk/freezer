import { createStore } from 'vuex'
import { supabase } from './supabase.js';

// Create a new store instance.
const store = createStore({
	state() {
		return {
			items: [],
			fetching: false,
			ready: false,
			stores: [
				{ id: 1, name: "Costco" },
				{ id: 2, name: "Fred Meyer" },
				{ id: 3, name: "Trader Joe's" },
				{ id: 4, name: "Whole Foods" }
			]
		}
	},
	mutations: {
		setItems(state, items) {
			state.items = items
		},
		setFetching(state, value) {
			state.fetching = value
		},
		setReady(state, value) {
			state.ready = value
		},
		setItemCount(state, {id, count}) {
			const item = state.items.find(e => e.id == id);
			item.count = count;
			state.items = [
				...state.items.filter(e => e.id !== id),
				item
			];
		},
		setItemMax(state, {id, max}) {
			const item = state.items.find(e => e.id == id);
			item.max = max;
			state.items = [
				...state.items.filter(e => e.id !== id),
				item
			];
		},
	},

	actions: {
		async fetchItems() {
			this.commit('setFetching', true)
			const { data, error } = await supabase
				.from('items')
				.select(`
					*,
					stores (
						id, name
					)
				`)
			this.commit('setItems', data)
			this.commit('setFetching', false)
			this.commit('setReady', true)
		},
		async setItemCount({commit}, {id, count}) {
			commit('setItemCount', {id, count})
			const { error } = await supabase
				.from('items')
				.update({ count })
				.eq('id', id)
		},
		async setItemMax({commit}, {id, max}) {
			commit('setItemMax', {id, max})
			const { error } = await supabase
				.from('items')
				.update({ max })
				.eq('id', id)
		},
		async checkout({dispatch}, items) {
			items.forEach(e => {
				// dispatch('setItemCount', {id: e.id, count: e.max})
			});
		}
	},

	getters: {
		item: (state) => (id) => {
			return state.items.find(i => i.id === id)
		},
		store: (state) => (id) => {
			return state.stores.find(i => i.id === id)
		},
		isReady: state => !state.fetching,
		itemsByStore: (state) => (id) => {
			return state.items.filter(i => i.stores.findIndex(s => s.id === id) != -1)
		}
	}
})

export default store;