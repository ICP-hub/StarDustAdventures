/**
 * Wallet Name Type
 * @type {WalletName}
 * @property {string} NFID - NFID Wallet
 * @property {string} BIFINITY - BIFINITY Wallet
 * @property {string} PLUG - PLUG Wallet
 * @property {string} INTERNET IDENTITY - INTERNET IDENTITY Wallet
 * @example 
 * const walletName : WalletName = 'NFID'
 */
type WalletName= 'NFID' | 'BIFINITY' | 'PLUG' | 'INTERNET IDENTITY'

/**
 * Wallet Type Interface for Wallets Array
 * @interface WalletType
 * @property {string} icon - Wallet Icon URL
 * @property {WalletName} name - Wallet Name
 * @type {'NFID' | 'BIFINITY' | 'PLUG' | 'INTERNET IDENTITY'}
 * @example
 * const wallet : WalletType = {
 *    icon:'/assets/images/wallets/nfid.svg',
 *    name:'NFID'
 * }
 * @author Arjun Sharma
 * @version 1.0
 * @ArjunQBTech
 */
interface WalletType{
    icon : string,
    name : WalletName,
    method : 'ii' | 'plug'
}