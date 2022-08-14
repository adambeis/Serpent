import { ethers } from 'ethers';

export const weiToNumber = (wei) => ethers.utils.formatUnits(wei);
export const numberToWei = (number) => ethers.utils.parseUnits(number.toString());

export const getAccount = (acc) => {
	return acc.slice(0, 5) + ' ... ' + acc.slice(acc.length - 4, acc.length);
};

export const getNumber = (num) => {
	num = num.toString();
	num = weiToNumber(num);
	if (hasDecimals(num)) return num;
	else if (num == 10) return 10;
	else return num % 10;
};

const hasDecimals = (n) => {
	var result = n - Math.floor(n) !== 0;
	if (result) return true; //Number has a decimal place.
	else return false; //It is a whole number.
};
