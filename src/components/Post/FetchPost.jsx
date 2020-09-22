import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPostThunk } from '../../thunks/postThunk';
import LoadingFetchPost from '../Loading/LoadingFetchPost';
import EmptyFetchPost from './EmptyFetchPost';
import Posts from './Posts';

const propTypes = {
	fetchPostThunk: PropTypes.func.isRequired,
	fetchPost: PropTypes.shape({
		posts: PropTypes.shape({
			data: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					slug: PropTypes.string,
					title: PropTypes.string,
					summary: PropTypes.string,
					created_at: PropTypes.string,
					user_name: PropTypes.string
				})
			)
		})
	}).isRequired
};
const mapStateToProps = (state) => ({
	fetchPost: state.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk
};
const FetchPost = (props) => {
	const { fetchPostThunk, fetchPost } = props;
	useEffect(() => {
		fetchPostThunk();
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					{fetchPost.loading ? (
						<LoadingFetchPost />
					) : (
						<div>
							{!fetchPost.posts.data.length ? (
								<EmptyFetchPost />
							) : (
								<>
									<Posts posts={fetchPost.posts.data} />
									<div className="clearfix">
										<Link className="btn btn-primary float-right" to="/">
											Next Page →
										</Link>
									</div>
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
FetchPost.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(FetchPost);
