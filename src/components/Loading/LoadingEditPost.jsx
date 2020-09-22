import React from 'react';

const LoadingEditPost = () => {
	return (
		<div>
			<div className="spinner-grow text-primary mr-4" role="status">
				<span className="sr-only">Loading...</span>
			</div>
			<div className="spinner-grow text-primary mr-4" role="status">
				<span className="sr-only">Loading...</span>
			</div>
			<div className="spinner-grow text-primary" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingEditPost;
