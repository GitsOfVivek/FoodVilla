import React from 'react';
const arr = new Array(15).fill(1);
const CardShimmer = () => {
	return (
		<div className="card">
			<div className="card-img-shimmer"></div>
			<div className="card-dec-shimmer">
				<h3 className="card-name-shimmer"></h3>
				<p></p>
				<p></p>
			</div>
		</div>
	);
};

const Shimmer = () => {
	return (
		<div className="main-containt">
			{arr.map(() => (
				<CardShimmer key={Math.random()} />
			))}
		</div>
	);
};

export default Shimmer;
