'use strict';

import request 	from 'axios';
import Reflux 	from 'reflux';

var QuestionsActions = Reflux.createActions({
    'fetch': {children: ['completed', 'failed']}
});

QuestionsActions.fetch.listen( function(options) {
    request.get('/api/questions').then(this.completed).catch(this.failed);
});

export default QuestionsActions;