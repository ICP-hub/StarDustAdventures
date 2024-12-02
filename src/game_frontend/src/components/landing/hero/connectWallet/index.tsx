import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { ModalHeader, ModalTitle, ModalCloseBtn, ModalBody } from "../../../ui/Modal/utils";
import { useAuth } from "../../../../hooks/useAuth";
import './index.css';
import { CREATE_USER } from "../../../../utils/api/update";
import { useNavigate } from "react-router-dom";

const Wallets : WalletType[] = [
    {
        icon:'/assets/images/wallets/nfid.png',
        name:'NFID',
        method:'ii'
    },
    {
        icon:'/assets/images/wallets/bifinity.png',
        name:'BIFINITY',
        method:'ii'
    },
    {
        icon:'/assets/images/wallets/plug.png',
        name:'PLUG',
        method:'plug'
    },
    {
        icon:'/assets/images/wallets/ii.png',
        name:'INTERNET IDENTITY',
        method:'ii'
    }
]

export default function ConnectWallet({closeModal} : {closeModal:()=>void}) {
    const auth = useAuth();
    const navigate = useNavigate()
    
    const {mutateAsync, data} = CREATE_USER(auth?.actors, {
        user:{name:"Test"}, 
        refBy:[]
    });

    console.log("Data : ", data)
    // Temporary Function : Register User on Successfull Login
    const handleLogin = async (method: "ii" | "plug") => {
        if (!auth) {
            console.error("Auth context is not available.");
            return;
        }
    
        try {
            const loginStatus = await auth.login(method);
            if(loginStatus) {
                const response : any = await mutateAsync();
                if(response.ok){
                    console.log("User Registered Successfully");
                    closeModal();
                }
                navigate('/dashboard');
            }
            
        } catch (error) {
            console.error("Login failed:", error);
            // Handle user feedback on error
        }
    };
    

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
                            <Button variant="secondary" key={wallet.name} className="wallet-button" onClick={()=>handleLogin(wallet.method)}>
                                <div className="wallet-button-container">
                                    <span>{wallet.name}</span>
                                    <img src={wallet.icon} alt={wallet.name} loading='lazy' width={40} height={40} className="wallet-icon"/>
                                </div>
                            </Button>
                        ))
                    }
                </div>
            </ModalBody>
        </Modal>
    )
}