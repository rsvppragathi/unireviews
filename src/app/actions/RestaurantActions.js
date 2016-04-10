'use strict';

import request 	from 'axios';
import Reflux 	from 'reflux';

var RestaurantActions = Reflux.createActions({
    'search': {children: ['completed', 'failed']},
    'rate': {children: ['completed', 'failed']},
});

RestaurantActions.search.listen( function(options) {
    request.get('/api/search/'+options.type+'/'+encodeURI(options.location)).then(this.completed).catch(this.failed);
});

RestaurantActions.rate.listen( function(options) {
    request.get('/api/rate/'+options.id+'/'+options.rating).then(this.completed).catch(this.failed);
});

export default RestaurantActions;