
import {Routes, Route} from "react-router-dom"
// import Homepage from "../pages/Homepage"
// import AboutPage from "../pages/AboutPage"
import PageNotFound from "../pages/PageNotFound"
import AnimePage from "../pages/AnimePage"
import HomePage from "../pages/HomePage"
import FavouritesPage from "../pages/FavouritesPage"


function AppRoutes(props) {

return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<HomePage {...props} />} />

{/* nested routes, matches on /dash/messages etc */}
<Route path="/anime" element={<AnimePage {...props} />}>

</Route>

<Route path='/favourites' element={<FavouritesPage {...props} />} />

{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />


</Routes>
)
}

export default AppRoutes;