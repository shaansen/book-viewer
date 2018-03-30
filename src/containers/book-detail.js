import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
	render() {

		if(!this.props.book) {
			return <div>Select a book to get Started</div>
		}

		return (
			<div>
				<h1> Details of the book </h1>
				<h3>Title : {this.props.book.title}</h3>
				<h3>Pages : {this.props.book.pages}</h3>

			</div>)
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail)