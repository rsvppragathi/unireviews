'use strict';

import Reflux 				from 'reflux';
import RestaurantActions 	from 'actions/RestaurantActions';

var _ratings = {};

var RatingsStore = Reflux.createStore({
    listenables: RestaurantActions,
    getInitialState: function() {
    	return _ratings;
	},
    onSearchCompleted: function(res){
    	var data = res.data.ratings;
    	_ratings = data;
    	this.trigger(_ratings);
    },
    onRateCompleted: function(res){
        _ratings[res.data.id][res.data.rating] = res.data.value;
        this.trigger(_ratings);
    }
});

export default RatingsStore;