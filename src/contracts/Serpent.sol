// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Serpent is ERC721Enumerable, Ownable {
	struct SerpentAttributes {
		string imageURI;
		uint8 level;
		uint256 index;
		uint256 hp;
		uint256 coolness;
		uint256 endurance;
	}

	event SerpentUpdated(
		address indexed owner,
		uint256 indexed tokenId,
		string imageURI,
		uint8 level,
		uint256 hp,
		uint256 coolness,
		uint256 endurance
	);

	using Counters for Counters.Counter;
	using Strings for uint256;

	Counters.Counter private supply;

	mapping(uint256 => SerpentAttributes) public tokenToSerpentAttributes;

	string public uriBase = 'ipfs://bafybeiex4fbtwhs4vroknjjnup2542ugcp4ftclmlg4dn3dghcqpr5gtsa/';
	string public uriExtension = '.json';

	uint256 public cost = 0.001 ether;
	uint256 public maxSupply = 1000;
	uint256 public maxMintAmountPerTx = 3;

	uint256 public interval = 60;
	uint256 public lastTimeStamp;
	address public marketAddress;

	constructor(address _marketAddress) ERC721('SERPENT', 'serpentToken') {
		lastTimeStamp = block.timestamp;
		marketAddress = _marketAddress;
		supply.increment();
		mint(1);
	}

	modifier mintCompliance(uint256 _mintAmount) {
		require(_mintAmount > 0 && _mintAmount <= maxMintAmountPerTx, 'Invalid mint amount!');
		require(supply.current() + _mintAmount <= maxSupply, 'Max supply exceeded!');
		_;
	}

	function getSupply() public view returns (uint256) {
		return supply.current();
	}

	function getOwnerTokens() public view returns (SerpentAttributes[] memory) {
		uint256 ownerBalance = balanceOf(msg.sender);
		SerpentAttributes[] memory ownedTokens = new SerpentAttributes[](ownerBalance);

		for (uint256 i = 0; i < ownerBalance; i++) {
			uint256 _tokenId = tokenOfOwnerByIndex(msg.sender, i);
			SerpentAttributes memory serpentToken = tokenToSerpentAttributes[_tokenId];
			ownedTokens[i] = serpentToken;
		}
		return ownedTokens;
	}

	function mint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) {
		require(msg.value >= cost * _mintAmount, 'Insufficient funds!');
		_mintLoop(msg.sender, _mintAmount);
	}

	function _mintLoop(address _receiver, uint256 _mintAmount) internal {
		for (uint256 i = 0; i < _mintAmount; i++) {
			safeMint(_receiver);
			supply.increment();
		}
	}

	function safeMint(address _receiver) internal {
		uint256 tokenId = supply.current();
		_safeMint(_receiver, tokenId);

		tokenToSerpentAttributes[tokenId] = SerpentAttributes({
			imageURI: tokenURI(tokenId),
			level: 0,
			index: tokenId,
			hp: 100,
			coolness: 100,
			endurance: 100
		});
		setApprovalForAll(marketAddress, true);
	}

	function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
		require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

		string memory currentBaseURI = _baseURI();
		return
			bytes(currentBaseURI).length > 0
				? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), uriExtension))
				: '';
	}

	function setUriBase(string memory _uriBase) public onlyOwner {
		uriBase = _uriBase;
	}

	function _baseURI() internal view virtual override returns (string memory) {
		return uriBase;
	}

	function withdraw() public onlyOwner {
		(bool os, ) = payable(owner()).call{value: address(this).balance}('');
		require(os);
	}

	function serpentStats(uint256 _tokenId)
		public
		view
		returns (
			string memory,
			uint8,
			uint256,
			uint256,
			uint256
		)
	{
		return (
			tokenToSerpentAttributes[_tokenId].imageURI,
			tokenToSerpentAttributes[_tokenId].level,
			tokenToSerpentAttributes[_tokenId].hp,
			tokenToSerpentAttributes[_tokenId].coolness,
			tokenToSerpentAttributes[_tokenId].endurance
		);
	}

	function emitUpdate(uint256 _tokenId) internal {
		emit SerpentUpdated(
			ownerOf(_tokenId),
			_tokenId,
			tokenToSerpentAttributes[_tokenId].imageURI,
			tokenToSerpentAttributes[_tokenId].level,
			tokenToSerpentAttributes[_tokenId].hp,
			tokenToSerpentAttributes[_tokenId].coolness,
			tokenToSerpentAttributes[_tokenId].endurance
		);
	}

	function play(uint256 _tokenId) public {
		tokenToSerpentAttributes[_tokenId].hp = tokenToSerpentAttributes[_tokenId].hp - 10;
		tokenToSerpentAttributes[_tokenId].endurance =
			tokenToSerpentAttributes[_tokenId].endurance -
			10;
		tokenToSerpentAttributes[_tokenId].coolness =
			(tokenToSerpentAttributes[_tokenId].hp + tokenToSerpentAttributes[_tokenId].endurance) /
			2;
		tokenToSerpentAttributes[_tokenId].level++;
		emitUpdate(_tokenId);
	}

	function midHealth(uint256 _tokenId) public {
		tokenToSerpentAttributes[_tokenId].hp = 50;
		tokenToSerpentAttributes[_tokenId].coolness = 50;
		tokenToSerpentAttributes[_tokenId].endurance = 50;
		emitUpdate(_tokenId);
	}

	function maxHealth(uint256 _tokenId) public {
		tokenToSerpentAttributes[_tokenId].hp = 100;
		tokenToSerpentAttributes[_tokenId].coolness = 100;
		tokenToSerpentAttributes[_tokenId].endurance = 100;
		emitUpdate(_tokenId);
	}

	function superHealth(uint256 _tokenId) public {
		tokenToSerpentAttributes[_tokenId].hp = 200;
		tokenToSerpentAttributes[_tokenId].coolness = 200;
		tokenToSerpentAttributes[_tokenId].endurance = 200;
		emitUpdate(_tokenId);
	}

	function checkUpkeep(
		bytes calldata /* checkData */
	)
		external
		view
		returns (
			bool upkeepNeeded,
			bytes memory /* performData */
		)
	{
		upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
	}

	function performUpkeep(
		bytes calldata /* performData */
	) external {
		for (uint256 i = 0; i <= supply.current(); i++) {
			if (
				tokenToSerpentAttributes[i].hp > 0 && ((block.timestamp - lastTimeStamp) > interval)
			) {
				lastTimeStamp = block.timestamp;
				play(i);
			}
		}
	}
}
