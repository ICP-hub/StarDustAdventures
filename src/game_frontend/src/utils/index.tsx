import { Principal } from "@dfinity/principal";

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

export const copyToClipBoard = async(text : string)=>{
    try {
        if(navigator.clipboard){
            await navigator.clipboard.writeText(text)
        } else {
            throw new Error('Clipboard API not available')
        }
    } catch(err){
        throw err
    }
}
/**
 * A Util function that shares content using the Web Share API
 * @param data : An object containing the title, text and url to share
 * @returns {Promise<void>}
 */
export const share = async (data: {title: string, text: string, url: string})=>{
    try {
        if(navigator.share){
            await navigator.share(data)
        } else {
            throw new Error('Share API not available')
        }
    } catch(err){
        throw err
    }
}
/**
 * A Util function that checks if a value is an array
 * @param value : A value to check if it is an array
 * @returns {Boolean} : A boolean value indicating if the value is an array
 */
export const isArray = (value : any) : Boolean=>{
    return Array.isArray(value)
}
/**
 * A Util function that converts a String to a Principal
 * @param principal : A string representation of a principal
 * @returns {Principal} : A Principal object
 */
export const extractPrincipal = (principal : string) : Principal=>{
    return Principal.fromText(principal)
}

/**
 * A Util function that filters an array based on a property
 * @param array : The array to filter
 * @param property : The property to filter by
 * @param value : The value to filter for
 * @returns {Array} : The filtered array
 */
export const filterArrayByProperty = (array: any[], property: string, value: any) => {
    return array.filter(item => item[property] === value);
};