import { Outlet } from 'react-router-dom'
import Header from '../molecules/Header'

export default function Layout() {
    return (<>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
    )
}
