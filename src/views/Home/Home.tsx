import { CardList, CreditCard, PasswordsList, SectionTitle } from '../../componets'
import { UserProfile } from '../../componets/UserProfile'
import { User } from '../../interface'
import '../css/home.css'

enum CC_TYPE {
    VISA = 'visa',
    MASTER = 'MasterCard',
    AMEX = 'amex',
    DISCO = 'discover'

}

const user:User = {
    id: 'addafeee-8597-4270-8c26-652962f29165',
    fullName: 'Yaderson Patiño',
    email: 'yadersonpatino@gmail.com',
    profilePic: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastLogin: new Date('2023-12-15T20:49:18.826Z') 
}

export const Home = () => {

    return (
        <div className="home">
            <header>
                <div className='welcome-legend'>
                    <h1>Hello, Yaderson</h1>
                    <p>Welcome to your vault.</p>
                </div>
                <div className='profile'>
                    <UserProfile {...user} />
                </div>
            </header>
            <main className='home-main-content'>
                <section>
                    <SectionTitle title='Cards' name='cards' redirectTo='/cards' />
                    <CreditCard number={Number('01234567896325878')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.VISA} />
                    {/* <CreditCard number={Number('2123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.MASTER} />
                    <CreditCard number={Number('3123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.AMEX} /> */}
                </section>
                <section>
                    <SectionTitle title='Cards List' name='cards' redirectTo='/cards' />
                    <CardList qty={100} />
                </section>
                <section>
                    <SectionTitle title='Passwords' name='passwords' redirectTo='/passwords' />
                    <PasswordsList />
                </section>
            </main>
            
        </div>
    )
}