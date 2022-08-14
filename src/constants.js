// Rinkeby
export const RMARKET_ADDRESS = '0xA0cD9482446FF78D8cfc85AC13a47d6a947fD853';
export const RMARKET_ABI = [
	{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'uint256', name: 'itemId', type: 'uint256' },
			{ indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'address', name: 'seller', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' },
			{ indexed: false, internalType: 'bool', name: 'sold', type: 'bool' }
		],
		name: 'MarketItemCreated',
		type: 'event'
	},
	{
		inputs: [],
		name: 'getListingPrice',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'uint256', name: 'price', type: 'uint256' }
		],
		name: 'createMarketItem',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'itemId', type: 'uint256' }
		],
		name: 'createMarketSale',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [],
		name: 'fetchMarketItems',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchMyNFTs',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchItemsCreated',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	}
];

export const RSERPENT_ADDRESS = '0x31dEFE428ff47065EF93443edC6E782b076ba40a';
export const RSERPENT_ABI = [
	{
		inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'string', name: 'imageURI', type: 'string' },
			{ indexed: false, internalType: 'uint8', name: 'level', type: 'uint8' },
			{ indexed: false, internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		name: 'SerpentUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'cost',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'interval',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'lastTimeStamp',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'marketAddress',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'maxMintAmountPerTx',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'maxSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'name',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'tokenToSerpentAttributes',
		outputs: [
			{ internalType: 'string', name: 'imageURI', type: 'string' },
			{ internalType: 'uint8', name: 'level', type: 'uint8' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' },
			{ internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'uriBase',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'uriExtension',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getOwnerTokens',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'imageURI', type: 'string' },
					{ internalType: 'uint8', name: 'level', type: 'uint8' },
					{ internalType: 'uint256', name: 'index', type: 'uint256' },
					{ internalType: 'uint256', name: 'hp', type: 'uint256' },
					{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
					{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
				],
				internalType: 'struct Serpent.SerpentAttributes[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_mintAmount', type: 'uint256' }],
		name: 'mint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'string', name: '_uriBase', type: 'string' }],
		name: 'setUriBase',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'serpentStats',
		outputs: [
			{ internalType: 'string', name: '', type: 'string' },
			{ internalType: 'uint8', name: '', type: 'uint8' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'play',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'midHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'maxHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'superHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'checkUpkeep',
		outputs: [
			{ internalType: 'bool', name: 'upkeepNeeded', type: 'bool' },
			{ internalType: 'bytes', name: '', type: 'bytes' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'performUpkeep',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

// Mumbai
export const MMARKET_ADDRESS = '0x0A56A817f36551A2fd7E7198D2e99024C4D665cb';
export const MMARKET_ABI = [
	{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'uint256', name: 'itemId', type: 'uint256' },
			{ indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'address', name: 'seller', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' },
			{ indexed: false, internalType: 'bool', name: 'sold', type: 'bool' }
		],
		name: 'MarketItemCreated',
		type: 'event'
	},
	{
		inputs: [],
		name: 'getListingPrice',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'uint256', name: 'price', type: 'uint256' }
		],
		name: 'createMarketItem',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'itemId', type: 'uint256' }
		],
		name: 'createMarketSale',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [],
		name: 'fetchMarketItems',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchMyNFTs',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchItemsCreated',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	}
];

export const MSERPENT_ADDRESS = '0x2588e57574478baA702Dd879A40aAD3F09D0DCd1';
export const MSERPENT_ABI = [
	{
		inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'string', name: 'imageURI', type: 'string' },
			{ indexed: false, internalType: 'uint8', name: 'level', type: 'uint8' },
			{ indexed: false, internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		name: 'SerpentUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'cost',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'interval',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'lastTimeStamp',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'marketAddress',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'maxMintAmountPerTx',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'maxSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'name',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'tokenToSerpentAttributes',
		outputs: [
			{ internalType: 'string', name: 'imageURI', type: 'string' },
			{ internalType: 'uint8', name: 'level', type: 'uint8' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' },
			{ internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'uriBase',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'uriExtension',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'getSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'getOwnerTokens',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'imageURI', type: 'string' },
					{ internalType: 'uint8', name: 'level', type: 'uint8' },
					{ internalType: 'uint256', name: 'index', type: 'uint256' },
					{ internalType: 'uint256', name: 'hp', type: 'uint256' },
					{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
					{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
				],
				internalType: 'struct Serpent.SerpentAttributes[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_mintAmount', type: 'uint256' }],
		name: 'mint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'string', name: '_uriBase', type: 'string' }],
		name: 'setUriBase',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'serpentStats',
		outputs: [
			{ internalType: 'string', name: '', type: 'string' },
			{ internalType: 'uint8', name: '', type: 'uint8' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'play',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'midHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'maxHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'superHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'checkUpkeep',
		outputs: [
			{ internalType: 'bool', name: 'upkeepNeeded', type: 'bool' },
			{ internalType: 'bytes', name: '', type: 'bytes' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'performUpkeep',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

// Localhost
export const LMARKET_ADDRESS = '0x0A56A817f36551A2fd7E7198D2e99024C4D665cb';
export const LMARKET_ABI = [
	{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'uint256', name: 'itemId', type: 'uint256' },
			{ indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'address', name: 'seller', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' },
			{ indexed: false, internalType: 'bool', name: 'sold', type: 'bool' }
		],
		name: 'MarketItemCreated',
		type: 'event'
	},
	{
		inputs: [],
		name: 'getListingPrice',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'uint256', name: 'price', type: 'uint256' }
		],
		name: 'createMarketItem',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'nftContract', type: 'address' },
			{ internalType: 'uint256', name: 'itemId', type: 'uint256' }
		],
		name: 'createMarketSale',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [],
		name: 'fetchMarketItems',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchMyNFTs',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'fetchItemsCreated',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'itemId', type: 'uint256' },
					{ internalType: 'address', name: 'nftContract', type: 'address' },
					{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
					{ internalType: 'address payable', name: 'seller', type: 'address' },
					{ internalType: 'address payable', name: 'owner', type: 'address' },
					{ internalType: 'uint256', name: 'price', type: 'uint256' },
					{ internalType: 'bool', name: 'sold', type: 'bool' }
				],
				internalType: 'struct Market.MarketItem[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	}
];

export const LSERPENT_ADDRESS = '0x2588e57574478baA702Dd879A40aAD3F09D0DCd1';
export const LSERPENT_ABI = [
	{
		inputs: [{ internalType: 'address', name: '_marketAddress', type: 'address' }],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ indexed: false, internalType: 'string', name: 'imageURI', type: 'string' },
			{ indexed: false, internalType: 'uint8', name: 'level', type: 'uint8' },
			{ indexed: false, internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		name: 'SerpentUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'cost',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'interval',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'lastTimeStamp',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'marketAddress',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'maxMintAmountPerTx',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'maxSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'name',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'tokenToSerpentAttributes',
		outputs: [
			{ internalType: 'string', name: 'imageURI', type: 'string' },
			{ internalType: 'uint8', name: 'level', type: 'uint8' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' },
			{ internalType: 'uint256', name: 'hp', type: 'uint256' },
			{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
			{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'uriBase',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'uriExtension',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'getSupply',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [],
		name: 'getOwnerTokens',
		outputs: [
			{
				components: [
					{ internalType: 'string', name: 'imageURI', type: 'string' },
					{ internalType: 'uint8', name: 'level', type: 'uint8' },
					{ internalType: 'uint256', name: 'index', type: 'uint256' },
					{ internalType: 'uint256', name: 'hp', type: 'uint256' },
					{ internalType: 'uint256', name: 'coolness', type: 'uint256' },
					{ internalType: 'uint256', name: 'endurance', type: 'uint256' }
				],
				internalType: 'struct Serpent.SerpentAttributes[]',
				name: '',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_mintAmount', type: 'uint256' }],
		name: 'mint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
		payable: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'string', name: '_uriBase', type: 'string' }],
		name: 'setUriBase',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'serpentStats',
		outputs: [
			{ internalType: 'string', name: '', type: 'string' },
			{ internalType: 'uint8', name: '', type: 'uint8' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'play',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'midHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'maxHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
		name: 'superHealth',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'checkUpkeep',
		outputs: [
			{ internalType: 'bool', name: 'upkeepNeeded', type: 'bool' },
			{ internalType: 'bytes', name: '', type: 'bytes' }
		],
		stateMutability: 'view',
		type: 'function',
		constant: true
	},
	{
		inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
		name: 'performUpkeep',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
