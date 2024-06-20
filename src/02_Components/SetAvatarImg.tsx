import avatar1 from '../03_assets/hamster01.png'
import avatar2 from '../03_assets/hamster02.png'
import avatar3 from '../03_assets/hamster03.png'
import avatar4 from '../03_assets/hamster04.png'

const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4
]

const setAvatarImg = () => {
  return (
    <div className="relative">
        <button className='text-2xl'>+</button>
        <div className="grid grid-cols-3 absolute top-0 left-0">
            {avatars.map((avatar, i)=> (
                <img key={i} src={avatar} alt=""/>
            ))}
        </div>
    </div>
  )
}

export default setAvatarImg