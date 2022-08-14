import { ethers } from 'ethers';
import { browser } from '$app/env';
import { get, writable } from 'svelte/store';
import {
	RSERPENT_ADDRESS,
	RSERPENT_ABI,
	RMARKET_ADDRESS,
	RMARKET_ABI,
	MSERPENT_ADDRESS,
	MSERPENT_ABI,
	MMARKET_ADDRESS,
	MMARKET_ABI,
	LSERPENT_ADDRESS,
	LSERPENT_ABI,
	LMARKET_ADDRESS,
	LMARKET_ABI
} from '../constants';

export const provider = writable(browser && localStorage.getItem('provider'));
provider.subscribe((pro) => browser && (localStorage.provider = pro));

export const signer = writable(browser && localStorage.getItem('signer'));
signer.subscribe((sig) => browser && (localStorage.signer = sig));

export const account = writable(browser && localStorage.getItem('connectedAccount'));
account.subscribe((acc) => browser && (localStorage.connectedAccount = acc));

export const chainId = writable(browser && localStorage.getItem('chainId'));
chainId.subscribe((cha) => browser && (localStorage.chainId = cha));

export const connected = writable(false);
connected.subscribe((conn) => browser && (localStorage.connected = conn));
browser && (localStorage.connected = false);

export const contract = writable(browser && localStorage.getItem('contract'));
contract.subscribe((con) => browser && (localStorage.contract = con));

export const market = writable(browser && localStorage.getItem('market'));
market.subscribe((mar) => browser && (localStorage.market = mar));

export const isMarketApproved = writable(false);

export const loading = writable(false);
export const disabledClass = writable('');

export const changeLoadingState = async (state) => {
	loading.set(state);
	if (state) disabledClass.set('opacity-50 cursor-not-allowed');
	else disabledClass.set('');
};
const changedAccount = (accounts) => {
	account.set(accounts[0]);
};

const changedChainId = () => {
	window.location.reload();
};

export const connectWallet = async () => {
	let newProvider = new ethers.providers.Web3Provider(window.ethereum, 'any');
	await newProvider.send('eth_requestAccounts', []);
	provider.set(newProvider);

	const { provider: ethereum } = newProvider;

	let newSigner = newProvider.getSigner();

	signer.set(newSigner);

	let newAccount = await newSigner.getAddress();
	account.set(newAccount);
	ethereum.on('accountsChanged', changedAccount);
	//ethereum.removeListener('accountsChanged', changedAccount);

	let newChainId = await newSigner.getChainId();
	chainId.set(newChainId);
	ethereum.on('chainChanged', changedChainId);

	contract.set(getNFTContract(newChainId));
	market.set(getMarketContract(newChainId));

	await isConnected();
};

const getNFTContract = (chainId) => {
	let _signer = get(signer);
	if (chainId == 4) return new ethers.Contract(RSERPENT_ADDRESS, RSERPENT_ABI, _signer);
	else if (chainId == 80001) return new ethers.Contract(MSERPENT_ADDRESS, MSERPENT_ABI, _signer);
	else return new ethers.Contract(LSERPENT_ADDRESS, LSERPENT_ABI, _signer);
};

const getMarketContract = (chainId) => {
	let _signer = get(signer);
	if (chainId == 4) {
		return new ethers.Contract(RMARKET_ADDRESS, RMARKET_ABI, _signer);
	} else if (chainId == 80001) {
		return new ethers.Contract(MMARKET_ADDRESS, MMARKET_ABI, _signer);
	} else {
		return new ethers.Contract(LMARKET_ADDRESS, LMARKET_ABI, _signer);
	}
};

export const isConnected = async () => {
	if (
		get(provider) &&
		get(signer) &&
		get(account) &&
		get(chainId) &&
		get(contract) &&
		get(market)
	) {
		connected.set(true);
	} else {
		console.log('Error: Something wrong on Logging in');
		connected.set(false);
	}
};
