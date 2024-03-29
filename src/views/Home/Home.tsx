import { CardList, CreditCard, PasswordsList, SectionTitle } from '../../componets'
import { UserProfile } from '../../componets/UserProfile'
import { useAuth } from '../../hooks/useAuth'
import { CC_TYPE } from '../../interface'
import '../css/home.css'

export const Home = () => {

    const user = useAuth()

    return (
        <div className="home">
            <header>
                <div className='welcome-legend'>
                    <h1>Hello, { user?.fullName.split(' ')[0] || 'USER_FULLNAME' }</h1>
                    <p>Welcome to your vault.</p>
                </div>
                <div className='profile'>
                    <UserProfile user={user} />
                </div>
            </header>
            <main className='home-main-content'>
                <section>
                    <SectionTitle title='Cards' name='cards' redirectTo='/cards' />
                    <CreditCard number={Number('01234567896325878')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.VISA} />
                    {/* <CreditCard number={Number('2123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.MASTER} />
                    <CreditCard number={Number('3123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.AMEX} />
                    <CreditCard number={Number('3123456789632587')} expire={new Date("11/01/2025")} sec_code={123} type={CC_TYPE.DISCO} /> */}

                </section>
                <section>
                    <SectionTitle title='Passwords' name='passwords' redirectTo='/passwords' />
                    <PasswordsList />
                </section>
                <section>
                    <SectionTitle title='Cards List' name='cards' redirectTo='/cards' />
                    <CardList />
                </section>
            </main>
        </div>
    )
}