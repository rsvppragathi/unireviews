'use strict';

import Reflux 				from 'reflux';
import RestaurantActions 	from 'actions/RestaurantActions';

var _restaurants = {};

var RestaurantStore = Reflux.createStore({
    listenables: RestaurantActions,
    getInitialState: function() {
    	return this.getAll();
	},
    onSearchCompleted: function(res){
    	var data = res.data.businesses;
    	_restaurants = {};
    	data.forEach(function(d){
    		_restaurants[d.id] = d;
    	});
    	this.trigger(this.getAll());
    },
    getAll: function(){
    	var restaurants = [];
    	for(var r in _restaurants) {
    		restaurants.push(_restaurants[r]);
    	}
    	return restaurants;
    }
});

export default RestaurantStore;