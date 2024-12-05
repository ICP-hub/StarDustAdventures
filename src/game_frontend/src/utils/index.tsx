/**
 * A function that converts a BigInt to a Number
 * @param bigInt - The BigInt to convert
 * @returns {Number}
 * @example 
 * const bigInt = BigInt(100)
 * const number = bigIntToNumber(bigInt)
 * console.log(typeof number) // Output: number
 * @author Arjun Sharma
 */
export const bigIntToNumber = (bigInt: BigInt): number => {
    const convertedValue = Number(bigInt.toString());
    return convertedValue;
}

export const validateName = (name: string) => {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(name);
}