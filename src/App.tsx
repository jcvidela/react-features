import * as React from 'react'
const UsersList = React.lazy(() => {
  return import('./components/UsersList')
}); // Lazy-loaded


/**
 * Hoy probamos el nuevo feature de importar con React.lazy,
 * donde solamente importamos el componente cuando necesitamos utilizarlo.
 * 
 * También aprendimos a utilizar el Suspense, donde el fallback el es componente
 * que vamos a mostrar mientras cargamos el componente para renderizar,
 * en este caso el <Main>
 */

export const App = () => {
  return (
   <React.Suspense fallback={'...Loading...'}>
     <UsersList/>
   </React.Suspense>
  )
}

export default App;
