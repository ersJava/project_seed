import React from 'react';

var carouselImages = [
	'http://placekitten.com/g/600/400',
	'http://placebear.com/600/400',
	'http://placehold.it/600x400'
];

var App = React.createClass({
	render: function () {
		return (
			<div className="main">
				<Carousel images={carouselImages} />
			</div>
		);
	}
});

var Carousel = React.createClass({

	propTypes: {
		images: React.PropTypes.arrayOf([
			React.PropTypes.string
		]).isRequired,
		showThumbnails: React.PropTypes.bool,
		slideshowActive: React.PropTypes.bool,
		slideshowDelay: React.PropTypes.number
	},

	getDefaultProps: function () {
		return {
			defaultSelectedIndex: 0,
			showThumbnails: true,
			slideshowActive: true,
			slideshowDelay: 4000
		};
	},

	getInitialState: function () {
		return {
			animationDirection: 'previous',
			selectedIndex: this.props.defaultSelectedIndex
		};
	},

	componentDidMount: function() {
		if (this.props.slideshowActive) {
			this.progressSlideshow();
		}
	},

	render: function () {
		var Animation = React.addons.CSSTransitionGroup;

		return (
			<div {...this.getProps()}>
				<div className="carousel--image">
					{this.renderArrow('previous')}
					<Animation transitionName={'animation--' + this.state.animationDirection}>
						{this.renderCurrentImage()}
					</Animation>
					{this.renderArrow('next')}
				</div>
				{this.renderThumbs()}
			</div>
		);
	},

	renderCurrentImage: function () {
		var selected = this.state.selectedIndex;
		var props = {
			key: selected,
			src: this.props.images[selected]
		};

		return (
			<img {...props} />
		);
	},

	renderArrow: function (direction) {
		var props = {
			className: 'carousel--arrow-' + direction,
			onClick: this.goInDirection.bind(null, direction)
		};

		return (
			<div {...props} />
		);
	},

	renderThumbs: function () {
		var thumbnails = null;

		if (this.props.showThumbnails) {
			thumbnails = (
				<div className="carousel--thumbs">
					{this.props.images.map(this.renderThumb)}
				</div>
			);
		}

		return thumbnails;
	},

	renderThumb: function (src, index) {
		var selected = (index === this.state.selectedIndex) ? ' carousel--selected' : '';
		var props = {
			className: 'carousel--thumb' + selected,
			key: index,
			onClick: this.handleThumbClick.bind(null, index),
			src: src
		}
		return <img {...props} />;
	},

	getProps: function () {
		var props = {
			className:'carousel',
			onKeyDown: this.handleKeyDown,
			tabIndex:'0'
		};

		if (this.props.slideshowActive) {
			props.onMouseEnter = this.handleMouseEnter;
			props.onMouseLeave = this.handleMouseLeave;
		}

		return props;
	},

	handleKeyDown: function (event) {
		var left = 37;
		var up = 38;
		var right = 39;
		var down = 40;
		var key = event.which;

		if (key === down || key === left) {
			this.goInDirection('previous');
		} else if (key === up || key === right) {
			this.goInDirection('next');
		}
	},

	handleMouseEnter: function () {
		clearTimeout(this.timeout);
	},

	handleMouseLeave: function () {
		this.progressSlideshow();
	},

	handleThumbClick: function (index) {
		this.goToIndex(index);
	},

	progressSlideshow: function () {
		this.setState({animationDirection: 'next'});

		this.timeout = setTimeout(function () {
			this.goInDirection('next');
			this.progressSlideshow();
		}.bind(this), this.props.slideshowDelay);
	},

	goToIndex: function (index) {
		var direction = (this.state.selectedIndex > index ) ? 'previous' : 'next';

		this.setState({
			animationDirection: direction,
			selectedIndex: index
		});
	},

	goInDirection: function (direction) {
		var totalImages = this.props.images.length;
		var modifier = (direction === 'next') ? 1 : -1;
		var newIndex = this.state.selectedIndex + modifier;

		if (newIndex === totalImages) {
			newIndex = 0;
		} else if (newIndex === -1) {
			newIndex = totalImages - 1;
		}

		this.setState({
			animationDirection: direction,
			selectedIndex: newIndex
		});
	}
});

React.render(<App />, document.getElementById('AppCarousel'));