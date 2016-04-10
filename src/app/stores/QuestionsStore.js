'use strict';

import Reflux 				from 'reflux';
import QuestionsActions 	from 'actions/QuestionsActions';

var _questions = {};

var QuestionsStore = Reflux.createStore({
    listenables: QuestionsActions,
    getInitialState: function() {
    	return this.getList();
	},
    onFetchCompleted: function(res){
    	var data = res.data;
    	_questions = data;
    	this.trigger(_questions);
    },
    getList: function(){
        var q = [];
        for(var i in _questions){
            q.push(_questions[i]);
        }
        return q;
    }
});

export default QuestionsStore;