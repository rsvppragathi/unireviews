'use strict';

import React 	from 'react';
import Logo 	from 'components/Logo';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header-inner">
				<Logo/>
      			<span className="sub">The <b>critical</b> info college tour guides don't tell you.</span>
			</div>
		);
	}
}
