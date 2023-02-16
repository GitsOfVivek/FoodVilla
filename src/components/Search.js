import React, { useState } from 'react';

const filterData = (searchText, restaurants) => {
	return restaurants?.filter(rest =>
		rest?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
	);
};

const Search = props => {
	const [searchText, setSearchText] = useState('');
	return (
		<div className="search-container">
			<input
				type="text"
				className="search-input"
				value={searchText}
				placeholder={'Search'}
				onChange={e => setSearchText(e.target.value)}
			/>
			<button
				className="search-btn"
				onClick={() => {
					const data = filterData(searchText, props?.allRestaurants);
					props?.setFilteredRestaurants(data);
				}}>
				Search
			</button>
		</div>
	);
};

export default Search;
