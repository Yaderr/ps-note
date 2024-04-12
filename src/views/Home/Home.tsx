import { CardCarousel, CardList, PasswordsList, SectionTitle } from '../../componets'
import { UserProfile } from '../../componets/UserProfile'
import { useAuth } from '../../hooks/useAuth'
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
                    {user && <UserProfile user={user} />}
                </div>
            </header>
            <main className='home-main-content'>
                <section>
                    <SectionTitle title='Cards' name='cards' redirectTo='/cards' />
                   <CardCarousel />
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