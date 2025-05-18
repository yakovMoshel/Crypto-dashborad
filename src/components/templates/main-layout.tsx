import { Outlet } from 'react-router-dom'
import MainNavigations from '../../navigation/MainNavigations'

export default function Layout() {
    return (<>
        <MainNavigations />
        <main>
            <Outlet />
        </main>
    </>
    )
}
