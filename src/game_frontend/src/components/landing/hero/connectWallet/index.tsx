import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { ModalHeader, ModalTitle, ModalCloseBtn, ModalBody } from "../../../ui/Modal/utils";
import './index.css';

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
                <div className="flex flex-col gap-4 w-full lg:py-6">
                    {
                        Wallets.map(wallet => (
                            <Button variant="secondary" key={wallet.name} className="wallet-button">
                                <div className="wallet-button-container">
                                    <img src={wallet.icon} alt={wallet.name} loading='lazy' width={40} height={40} className="wallet-icon"/>
                                    <span>{wallet.name}</span>
                                </div>
                            </Button>
                        ))
                    }
                </div>
            </ModalBody>
        </Modal>
    )
}