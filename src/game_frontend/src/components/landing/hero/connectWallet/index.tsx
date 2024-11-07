import Modal from "../../../ui/Modal";
import { ModalHeader, ModalTitle, ModalCloseBtn, ModalBody } from "../../../ui/Modal/utils";

const Wallets : WalletType[] = [
    {
        icon:'/assets/images/wallets/nfid.png',
        name:'NFID'
    },
    {
        icon:'/assets/images/wallets/bifinity.png',
        name:'BIFINITY'
    },
    {
        icon:'/assets/images/wallets/plug.png',
        name:'PLUG'
    },
    {
        icon:'/assets/images/wallets/ii.png',
        name:'INTERNET IDENTITY'
    }
]

export default function ConnectWallet({closeModal} : {closeModal:()=>void}) {
    return (
        <Modal onClose={closeModal}>
            <ModalHeader>
                <ModalTitle>Connect Wallet</ModalTitle>
                <ModalCloseBtn/>
            </ModalHeader>
            <ModalBody>
                <div className="flex flex-col gap-2">
                    {
                        Wallets.map(wallet => (
                            <div key={wallet.name} className="flex items-center gap-2">
                                <img src={wallet.icon} alt={wallet.name} loading='lazy' width={30} height={30}/>
                                <span>{wallet.name}</span>
                            </div>
                        ))
                    }
                </div>
            </ModalBody>
        </Modal>
    )
}