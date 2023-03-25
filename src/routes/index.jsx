import { Switch, Route } from 'react-router-dom'
import Contacts from '../pages/Contacts'

const Routes = () => {
    return(
        <Switch>
            <Route>
                <Contacts exact path='/'/>
            </Route>
        </Switch>
    )
}

export default Routes