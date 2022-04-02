'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
			return '🤤';
		}

		// React.createElement(type,{props},children);
		return e(
			'button',
			{
				onClick: () => this.setState({ liked: true }),
				style: { color: 'white' },
				className: 'btn btn-primary',
			},
			'CLICK ME!'
		);
	}
}
const domContainer = document.querySelector('#ProjectSection');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
