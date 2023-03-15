import React from 'react'

import {useAuth} from '../providers/auth'

const Footer = () => {
  const { user } = useAuth()
  return(
    <footer>
      <p>Todos os direitos reservados</p>
      <p>{ user?.name ? 'Ususário logado' : '' }</p>
    </footer>
  )
}

export default Footer