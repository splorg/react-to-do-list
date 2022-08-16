import { MdInfoOutline } from 'react-icons/md'

import './Background.css'

const Background = () => {
  return (
    <div className='background'>
      <p className='background__message'>Você não possui tarefas cadastradas</p>
      <MdInfoOutline size={64} />
    </div>
  )
}

export default Background