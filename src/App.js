import React from 'react'

import Login from './components/login';
import Profile from './components/profile';
import Footer from './components/footer';
import { useAuth } from './providers/auth';
import styles from './style.module.css'

function App() {
  const { user } = useAuth()
  console.log(user)

  const [ isLogin, setIsLogin ] = React.useState(false);

  const handleDialogLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <h1>Olá GamaAcademy</h1>
      <Profile />
      { !isLogin && (
        <div>
          <button onClick={handleDialogLogin}>Deseja logar?</button>
        </div>
      )}
      { isLogin && (
        <>
          <div className={styles.box}>
            <button onClick={handleDialogLogin}>Fechar</button>
            <Login />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
