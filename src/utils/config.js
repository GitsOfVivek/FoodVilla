export const restaurantList =
	// 20230226204838
	// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4831584&lng=84.43655&page_type=DESKTOP_WEB_LISTING

	{
		statusCode: 0,
		data: {
			cacheExpiryTime: 320,
			pages: 1,
			pageIndex: 0,
			scrubber: 0,
			filters: [
				{
					type: 'FilterWidget',
					title: 'Cuisines',
					key: 'CUISINES',
					configType: 'checkbox',
					visible: 1,
					options: [
						{
							option: 'American',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Arabian',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Beverages',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Biryani',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Chinese',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Desserts',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Fast Food',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Ice Cream',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Indian',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Italian',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Kebabs',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Mughlai',
							selected: 0,
							visible: 1,
						},
						{
							option: 'North Indian',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Pastas',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Pizzas',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Snacks',
							selected: 0,
							visible: 1,
						},
						{
							option: 'South Indian',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Sweets',
							selected: 0,
							visible: 1,
						},
					],
					detail: '',
					heading: 'Cuisines',
					applicable: 1,
					searchable: 1,
				},
				{
					type: 'FilterWidget',
					title: 'Show Restaurants With',
					key: 'SHOW_RESTAURANTS_WITH',
					configType: 'checkbox',
					visible: 1,
					options: [
						{
							option: 'Offers',
							selected: 0,
							visible: 1,
						},
						{
							option: 'Pure Veg',
							selected: 0,
							visible: 1,
						},
					],
					detail: '',
					heading: 'Offers & More',
					applicable: 1,
					searchable: 0,
				},
			],
			sorts: [
				{
					type: 'SortWidget',
					key: 'RELEVANCE',
					title: 'Relevance',
					selected: 1,
					visible: 1,
					defaultSelection: true,
				},
				{
					type: 'SortWidget',
					key: 'DELIVERY_TIME',
					title: 'Delivery Time',
					selected: 0,
					visible: 1,
					defaultSelection: false,
				},
				{
					type: 'SortWidget',
					key: 'RATING',
					title: 'Rating',
					selected: 0,
					visible: 1,
					defaultSelection: false,
				},
				{
					type: 'SortWidget',
					key: 'COST_FOR_TWO',
					title: 'Cost: Low to High',
					selected: 0,
					visible: 1,
					defaultSelection: false,
				},
				{
					type: 'SortWidget',
					key: 'COST_FOR_TWO_H2L',
					title: 'Cost: High to Low',
					selected: 0,
					visible: 1,
					defaultSelection: false,
				},
			],
			configs: {
				ribbons: {
					PREORDER: {
						type: 'PREORDER',
						text: 'Preorder',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#af2330',
						priority: 3,
					},
					EXCLUSIVE: {
						type: 'EXCLUSIVE',
						text: 'Exclusive',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#fa4a5b',
						bottomBackgroundColor: '#d12a3b',
						priority: 2,
					},
					NEW: {
						type: 'NEW',
						text: 'Newly Added',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#af2330',
						priority: 4,
					},
					REPEAT: {
						type: 'REPEAT',
						text: 'Repeat',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#D53D4C',
						bottomBackgroundColor: '#B02331',
						priority: 6,
					},
					CLOUD: {
						type: 'CLOUD',
						text: 'Daily Menus',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#fa4a5b',
						bottomBackgroundColor: '#d12a3b',
						priority: 5,
					},
					PREMIUM: {
						type: 'PREMIUM',
						text: 'Premium',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#8a584b',
						bottomBackgroundColor: '#583229',
						priority: 7,
					},
					PROMOTED: {
						type: 'PROMOTED',
						text: 'Promoted',
						textColor: '#ffffff',
						imageId: 'sfefefefeegeg',
						topBackgroundColor: '#3a3c41',
						bottomBackgroundColor: '#1e2023',
						priority: 1,
					},
				},
			},
			cards: [
				{
					cardType: 'carousel',
					layoutAlignmentType: 'VERTICAL',
					data: {
						type: 'carousel',
						subtype: 'topCarousel',
						data: {
							cards: [
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 635529,
										creativeId:
											'rng/md/carousel/production/pneknawbadtvceqzwiep',
										type: 'restaurantCollectionV2',
										link: '49301',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										thirdPartyVendor: '',
										thirdPartyAddress: false,
									},
								},
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 607193,
										creativeId:
											'rng/md/carousel/production/s5ug2key6e2sptaxku5v',
										type: 'restaurantCollectionV2',
										link: '56410',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										thirdPartyVendor: '',
										thirdPartyAddress: false,
									},
								},
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 607188,
										creativeId:
											'rng/md/carousel/production/oxe97jexxbnxqtbhg2zo',
										type: 'restaurantCollectionV2',
										link: '11740',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										thirdPartyVendor: '',
										thirdPartyAddress: false,
									},
								},
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 607195,
										creativeId:
											'rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3',
										type: 'restaurantCollectionV2',
										link: '56421',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										thirdPartyVendor: '',
										thirdPartyAddress: false,
									},
								},
							],
						},
					},
					parentWidget: false,
				},
				{
					cardType: 'carousel',
					layoutAlignmentType: 'VERTICAL',
					data: {
						type: 'carousel',
						subtype: 'openFilter',
						data: {
							cards: [
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 181684,
										creativeId: 'bkhjfipzydkoqncrxpyi',
										type: 'restaurantCollectionV2',
										link: '11718',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										title: 'Offers Near You',
										subtitle: '0 OPTIONS',
										restaurants: [],
										totalCount: 0,
										dwebOpenFilterTitle: 'Offers Near You',
										dwebOpenFilterBgColor: '#FF0000',
										dwebOpenFilterSelectIcon:
											'eyperwsfhaoa5vktjtu4',
										dwebOpenFilterDeselectIcon:
											'urw8usdf4mk9aywd59gq',
									},
								},
								{
									type: 'carouselElement',
									subtype: 'image',
									data: {
										bannerId: 181680,
										creativeId: 'a3jqjjod5taken7dh1bs',
										type: 'restaurantCollectionV2',
										link: '11721',
										cityId: 0,
										restaurantUuid: '',
										restaurantParentId: '0',
										title: 'Veg Only',
										subtitle: '0 OPTIONS',
										restaurants: [],
										totalCount: 0,
										dwebOpenFilterTitle:
											'Vegetarian Options',
										dwebOpenFilterBgColor: '#FF0000',
										dwebOpenFilterSelectIcon:
											'qtjc8dzfexg72lug37a0',
										dwebOpenFilterDeselectIcon:
											'bm8bziikwyvwqsml1clm',
									},
								},
							],
						},
					},
					parentWidget: false,
				},
				{
					cardType: 'seeAllRestaurants',
					layoutAlignmentType: 'VERTICAL',
					data: {
						type: 'seeAllRestaurants',
						data: {
							title: 'SEE ALL',
							totalOpenRestaurants: 29,
							cards: [
								{
									type: 'restaurant',
									data: {
										type: 'F',
										id: '543490',
										name: 'Original Al baik, The Taste of saudi  Arabia',
										uuid: '6f0cc324-f0ae-496c-bb78-12471cad3b91',
										city: '10501',
										area: 'Post Office Chowk',
										totalRatingsString: '50+ ratings',
										cloudinaryImageId:
											'ahyrsgnyb0mozeezavyk',
										cuisines: [
											'North Indian',
											'American',
											'Fast Food',
											'Snacks',
										],
										tags: [],
										costForTwo: 25000,
										costForTwoString: '₹250 FOR TWO',
										deliveryTime: 26,
										minDeliveryTime: 26,
										maxDeliveryTime: 26,
										slaString: '26 MINS',
										lastMileTravel: 2.5999999046325684,
										slugs: {
											restaurant:
												'original-al-baik,-the-taste-of-saudi-arabia-gopalganj-town-gopalganj-town',
											city: 'gopalganj',
										},
										cityState: '10501',
										address:
											'near post office chowk, beside Baibhav hotel, banjari road, gopalganj 841428',
										locality: 'Gopalganj Town',
										parentId: 326614,
										unserviceable: false,
										veg: false,
										select: false,
										favorite: false,
										tradeCampaignHeaders: [],
										aggregatedDiscountInfo: {
											header: '50% off',
											shortDescriptionList: [
												{
													meta: '50% off | Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '50% off up to ₹100 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										aggregatedDiscountInfoV2: {
											header: '50% OFF',
											shortDescriptionList: [
												{
													meta: 'Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '50% off up to ₹100 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										ribbon: [
											{
												type: 'PROMOTED',
											},
										],
										chain: [],
										feeDetails: {
											fees: [],
											totalFees: 0,
											message: '',
											title: '',
											amount: '',
											icon: '',
										},
										availability: {
											opened: true,
											nextOpenMessage: '',
											nextCloseMessage: '',
										},
										longDistanceEnabled: 0,
										rainMode: 'NONE',
										thirdPartyAddress: false,
										thirdPartyVendor: '',
										adTrackingID:
											'cid=6002941~p=1~eid=00000186-8e4d-f290-3c74-a69900860120',
										badges: {
											imageBased: [],
											textBased: [],
											textExtendedBadges: [],
										},
										lastMileTravelString: '2.5 kms',
										hasSurge: false,
										sla: {
											restaurantId: '543490',
											deliveryTime: 26,
											minDeliveryTime: 26,
											maxDeliveryTime: 26,
											lastMileTravel: 2.5999999046325684,
											lastMileDistance: 0,
											serviceability: 'SERVICEABLE',
											rainMode: 'NONE',
											longDistance: 'NOT_LONG_DISTANCE',
											preferentialService: false,
											iconType: 'EMPTY',
										},
										promoted: true,
										avgRating: '3.7',
										totalRatings: 50,
										new: false,
									},
									subtype: 'basic',
								},
								{
									type: 'restaurant',
									data: {
										type: 'F',
										id: '487885',
										name: 'The Hot Chinese',
										uuid: '45dc3dc4-13e2-4feb-8afb-2499061b54c2',
										city: '10501',
										area: 'Gopalganj Town',
										totalRatingsString: 'Too Few Ratings',
										cloudinaryImageId:
											'eidkfpcynkgcwyyp5dxg',
										cuisines: ['Chinese'],
										tags: [],
										costForTwo: 20000,
										costForTwoString: '₹200 FOR TWO',
										deliveryTime: 23,
										minDeliveryTime: 23,
										maxDeliveryTime: 23,
										slaString: '23 MINS',
										lastMileTravel: 1.899999976158142,
										slugs: {
											restaurant:
												'food-palace-roll-point-the-hot-chinese-gopalganj-town-gopalganj-town',
											city: 'gopalganj',
										},
										cityState: '10501',
										address:
											'YADOPUR ROAD W NO 12, NEAR AXICE BANK A, TM OPP SINGH MEDICAL, GOPALGANJ GOPALGAN, Gopalganj, Gopalganj, Gopalganj, Bihar - 841428',
										locality: 'Gopalganj Town',
										parentId: 209663,
										unserviceable: false,
										veg: false,
										select: false,
										favorite: false,
										tradeCampaignHeaders: [],
										aggregatedDiscountInfo: {
											header: '20% off',
											shortDescriptionList: [
												{
													meta: '20% off | Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '20% off up to ₹50 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										aggregatedDiscountInfoV2: {
											header: '20% OFF',
											shortDescriptionList: [
												{
													meta: 'Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '20% off up to ₹50 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										chain: [],
										feeDetails: {
											fees: [],
											totalFees: 0,
											message: '',
											title: '',
											amount: '',
											icon: '',
										},
										availability: {
											opened: true,
											nextOpenMessage: '',
											nextCloseMessage: 'Closes soon',
										},
										longDistanceEnabled: 0,
										rainMode: 'NONE',
										thirdPartyAddress: false,
										thirdPartyVendor: '',
										adTrackingID: '',
										badges: {
											imageBased: [],
											textBased: [],
											textExtendedBadges: [],
										},
										lastMileTravelString: '1.8 kms',
										hasSurge: false,
										sla: {
											restaurantId: '487885',
											deliveryTime: 23,
											minDeliveryTime: 23,
											maxDeliveryTime: 23,
											lastMileTravel: 1.899999976158142,
											lastMileDistance: 0,
											serviceability: 'SERVICEABLE',
											rainMode: 'NONE',
											longDistance: 'NOT_LONG_DISTANCE',
											preferentialService: false,
											iconType: 'EMPTY',
										},
										promoted: false,
										avgRating: '--',
										totalRatings: 0,
										new: false,
									},
									subtype: 'basic',
								},
								{
									type: 'restaurant',
									data: {
										type: 'F',
										id: '203118',
										name: 'Laxmi Hotel & Restaurant',
										uuid: '33785b13-0d61-47db-8a92-32aab5bc21b2',
										city: '10501',
										area: 'Yadopur Road',
										totalRatingsString: '500+ ratings',
										cloudinaryImageId:
											'unlao0c30xndimiquuts',
										cuisines: [
											'North Indian',
											'Italian',
											'Chinese',
										],
										tags: [],
										costForTwo: 20000,
										costForTwoString: '₹200 FOR TWO',
										deliveryTime: 23,
										minDeliveryTime: 23,
										maxDeliveryTime: 23,
										slaString: '23 MINS',
										lastMileTravel: 1.600000023841858,
										slugs: {
											restaurant:
												'laxmi-hotel-restaurant-yadopur-road-gopalganj-town',
											city: 'gopalganj',
										},
										cityState: '10501',
										address: 'YADOPUR ROAD, GOPALGANJ',
										locality: 'YADOPUR ROAD',
										parentId: 123944,
										unserviceable: false,
										veg: false,
										select: false,
										favorite: false,
										tradeCampaignHeaders: [],
										aggregatedDiscountInfo: {
											header: 'FREE DELIVERY',
											shortDescriptionList: [
												{
													meta: 'FREE DELIVERY',
													discountType:
														'FREE_DELIVERY',
													operationType: 'RESTAURANT',
												},
												{
													meta: 'Free Freebie on orders above ₹499',
													discountType: 'Freebie',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: 'FREE DELIVERY',
													discountType:
														'FREE_DELIVERY',
													operationType: 'RESTAURANT',
												},
												{
													meta: 'Free Freebie on orders above ₹499',
													discountType: 'Freebie',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										aggregatedDiscountInfoV2: {
											header: '',
											shortDescriptionList: [
												{
													meta: 'Free Delivery',
													discountType:
														'FREE_DELIVERY',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: 'FREE DELIVERY',
													discountType:
														'FREE_DELIVERY',
													operationType: 'RESTAURANT',
												},
												{
													meta: 'Free Freebie on orders above ₹499',
													discountType: 'Freebie',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										chain: [],
										feeDetails: {
											fees: [],
											totalFees: 0,
											message: '',
											title: '',
											amount: '',
											icon: '',
										},
										availability: {
											opened: true,
											nextOpenMessage: '',
											nextCloseMessage: '',
										},
										longDistanceEnabled: 0,
										rainMode: 'NONE',
										thirdPartyAddress: false,
										thirdPartyVendor: '',
										adTrackingID: '',
										badges: {
											imageBased: [],
											textBased: [],
											textExtendedBadges: [],
										},
										lastMileTravelString: '1.6 kms',
										hasSurge: false,
										sla: {
											restaurantId: '203118',
											deliveryTime: 23,
											minDeliveryTime: 23,
											maxDeliveryTime: 23,
											lastMileTravel: 1.600000023841858,
											lastMileDistance: 0,
											serviceability: 'SERVICEABLE',
											rainMode: 'NONE',
											longDistance: 'NOT_LONG_DISTANCE',
											preferentialService: false,
											iconType: 'EMPTY',
										},
										promoted: false,
										avgRating: '3.7',
										totalRatings: 500,
										new: false,
									},
									subtype: 'basic',
								},
								{
									type: 'restaurant',
									data: {
										type: 'F',
										id: '203113',
										name: "Today's Pizza",
										uuid: '2079aae0-1965-45a8-834e-6ad5d0850998',
										city: '10501',
										area: 'Town Thana',
										totalRatingsString: '5000+ ratings',
										cloudinaryImageId:
											'ick8actxmkhz9jhdaxip',
										cuisines: [
											'North Indian',
											'Chinese',
											'Italian',
										],
										tags: [],
										costForTwo: 20000,
										costForTwoString: '₹200 FOR TWO',
										deliveryTime: 26,
										minDeliveryTime: 26,
										maxDeliveryTime: 26,
										slaString: '26 MINS',
										lastMileTravel: 2.5999999046325684,
										slugs: {
											restaurant:
												'todays-pizza-yadopur-road-gopalganj-town',
											city: 'gopalganj',
										},
										cityState: '10501',
										address:
											'MAIN RD, MURLI MARKET, GOPALGANJ',
										locality: 'YADOPUR ROAD',
										parentId: 216958,
										unserviceable: false,
										veg: false,
										select: false,
										favorite: false,
										tradeCampaignHeaders: [],
										aggregatedDiscountInfo: {
											header: '30% off',
											shortDescriptionList: [
												{
													meta: '30% off | Use JUMBO',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '30% off up to ₹150 on orders above ₹400 | Use code JUMBO',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										aggregatedDiscountInfoV2: {
											header: '30% OFF',
											shortDescriptionList: [
												{
													meta: 'Use JUMBO',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '30% off up to ₹150 on orders above ₹400 | Use code JUMBO',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										ribbon: [
											{
												type: 'PROMOTED',
											},
										],
										chain: [],
										feeDetails: {
											fees: [],
											totalFees: 0,
											message: '',
											title: '',
											amount: '',
											icon: '',
										},
										availability: {
											opened: true,
											nextOpenMessage: '',
											nextCloseMessage: '',
										},
										longDistanceEnabled: 0,
										rainMode: 'NONE',
										thirdPartyAddress: false,
										thirdPartyVendor: '',
										adTrackingID:
											'cid=6002638~p=4~eid=00000186-8e4d-f290-3c74-a69a0086043e',
										badges: {
											imageBased: [],
											textBased: [],
											textExtendedBadges: [],
										},
										lastMileTravelString: '2.5 kms',
										hasSurge: false,
										sla: {
											restaurantId: '203113',
											deliveryTime: 26,
											minDeliveryTime: 26,
											maxDeliveryTime: 26,
											lastMileTravel: 2.5999999046325684,
											lastMileDistance: 0,
											serviceability: 'SERVICEABLE',
											rainMode: 'NONE',
											longDistance: 'NOT_LONG_DISTANCE',
											preferentialService: false,
											iconType: 'EMPTY',
										},
										promoted: true,
										avgRating: '3.8',
										totalRatings: 5000,
										new: false,
									},
									subtype: 'basic',
								},
								{
									type: 'restaurant',
									data: {
										type: 'F',
										id: '517907',
										name: 'Food king',
										uuid: '33f05ab3-a7c8-4d29-84e5-29c3e0239eaa',
										city: '10501',
										area: 'Banjari Road',
										totalRatingsString: '20+ ratings',
										cloudinaryImageId:
											'j96lxqkk5lnzozglztvw',
										cuisines: [
											'North Indian',
											'South Indian',
											'Snacks',
											'Fast Food',
											'Pizzas',
										],
										tags: [],
										costForTwo: 20000,
										costForTwoString: '₹200 FOR TWO',
										deliveryTime: 23,
										minDeliveryTime: 23,
										maxDeliveryTime: 23,
										slaString: '23 MINS',
										lastMileTravel: 1.899999976158142,
										slugs: {
											restaurant:
												'food-king-gopalganj-town-gopalganj-town',
											city: 'gopalganj',
										},
										cityState: '10501',
										address:
											'Banjari road In front of kotak mahindra bank ?????????????????? ??????????- 841428',
										locality: 'Gopalganj Town',
										parentId: 81526,
										unserviceable: false,
										veg: false,
										select: false,
										favorite: false,
										tradeCampaignHeaders: [],
										aggregatedDiscountInfo: {
											header: '50% off',
											shortDescriptionList: [
												{
													meta: '50% off | Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '50% off up to ₹100 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										aggregatedDiscountInfoV2: {
											header: '50% OFF',
											shortDescriptionList: [
												{
													meta: 'Use TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											descriptionList: [
												{
													meta: '50% off up to ₹100 | Use code TRYNEW',
													discountType: 'Percentage',
													operationType: 'RESTAURANT',
												},
											],
											subHeader: '',
											headerType: 0,
											superFreedel: '',
										},
										chain: [],
										feeDetails: {
											fees: [],
											totalFees: 0,
											message: '',
											title: '',
											amount: '',
											icon: '',
										},
										availability: {
											opened: true,
											nextOpenMessage: '',
											nextCloseMessage: '',
										},
										longDistanceEnabled: 0,
										rainMode: 'NONE',
										thirdPartyAddress: false,
										thirdPartyVendor: '',
										adTrackingID: '',
										badges: {
											imageBased: [],
											textBased: [],
											textExtendedBadges: [],
										},
										lastMileTravelString: '1.8 kms',
										hasSurge: false,
										sla: {
											restaurantId: '517907',
											deliveryTime: 23,
											minDeliveryTime: 23,
											maxDeliveryTime: 23,
											lastMileTravel: 1.899999976158142,
											lastMileDistance: 0,
											serviceability: 'SERVICEABLE',
											rainMode: 'NONE',
											longDistance: 'NOT_LONG_DISTANCE',
											preferentialService: false,
											iconType: 'EMPTY',
										},
										promoted: false,
										avgRating: '3.5',
										totalRatings: 20,
										new: false,
									},
									subtype: 'basic',
								},
							],
							totalRestaurants: 35,
						},
						subtype: 'personalized',
					},
					parentWidget: false,
				},
			],
			nextPageFetch: 0,
		},
		tid: 'b9e64854-34e9-49e2-840f-23117c9dbadf',
		sid: '5mk42586-bc41-4222-b36c-003011651792',
		deviceId: '81a5848c-a918-4774-361b-5b0678b6ebb7',
		csrfToken: '6gX9qScdt2y3-FD26XXDCZgOg0iVqX71DByCKqEM',
	};
export const IMG_CDN_URL = 'https://res.cloudinary.com/swiggy/image/upload/';

export const API_LINK =
	'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4831584&lng=84.43655&page_type=DESKTOP_WEB_LISTING';
export const RESAURENT_ID_API_LINK =
	'https://www.swiggy.com/dapi/menu/v4/full?lat=26.4831584&lng=84.43655&menuId=';
