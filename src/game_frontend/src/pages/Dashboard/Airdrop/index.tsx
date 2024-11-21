import { Tab, TabPanel, Tabs } from '../../../components/ui/Tab'
import './index.css'

const Airdrop=()=>{
    return(
        <main className='main-container'>
            <section>
                <h2>We did it!</h2>
                <div>
                    <img src="/assets/images/ufo.svg" alt="ufo" />
                </div>
                <p>token is on the market</p>
            </section>
            <Tabs>
                <Tab index={0}>
                    <p>Tab 0</p>
                </Tab>
                <Tab index={1}>
                    <p>Tab 1</p>
                </Tab>
                <TabPanel index={0}>
                        <>
                            <h3>Claim your tokens</h3>
                            <p>Claim your tokens by connecting your wallet</p>
                            <button>Connect Wallet</button>
                        </>
                    </TabPanel>
                <TabPanel index={1}>
                        <>
                            <h3>Claim your Locals</h3>
                            <p>Claim your tokens by connecting your wallet</p>
                            <button>Connect Wallet</button>
                        </>
                </TabPanel>
            </Tabs>
        </main>
    )
}
export default Airdrop