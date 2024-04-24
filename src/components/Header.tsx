import Image from 'next/image'
import logo  from '../assets/logo.jpg'

export function Header ()  {
  return (
    <div className='px-20'>
      <Image src={logo} width={100} height={100} alt='' />
    </div>
  )
}
