import React, { useState } from 'react';

const filterData = (searchText, restaurants) => {
	return restaurants?.filter(rest =>
		rest?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
	);
};

const Search = props => {
	const [searchText, setSearchText] = useState('');
	return (
		<div className="flex items-center justify-center m-auto">
			<input
				type="text"
				className="p-2 border-2 border-orange-500 outline-none"
				value={searchText}
				placeholder={'Search'}
				onChange={e => setSearchText(e.target.value)}
			/>
			<button
				className="text-white border-2 outline-none border-orange-500 p-2 bg-orange-500"
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
