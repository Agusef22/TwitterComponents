import { useState } from 'react'

export function TwitterFollowCard({ username = 'unknown', name }) {
  const imageSrc = `https://unavatar.io/${username}`
  const [isFollowing, setIsFollowing] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const text = isHovering ? 'Dejar de seguir' : 'Siguiendo'
  const style = isHovering
    ? 'follow-card-button-following'
    : 'follow-card-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const handleMouseIn = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div className='follow-card'>
      <article>
        <header className='follow-card-header'>
          <img
            className='follow-card-avatar-img'
            src={imageSrc}
            alt='La imagen de Agusef22'
          />
          <div className='follow-card-avatar-info-container'>
            <strong className='follow-card-avatar-name'>{name}</strong>
            <span className='follow-card-avatar-user'>@{username}</span>
          </div>
        </header>
      </article>

      <aside>
        {isFollowing ? (
          <button
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
            onClick={handleClick}
            className={style}
          >
            {text}
          </button>
        ) : (
          <button onClick={handleClick} className='follow-card-button'>
            Seguir
          </button>
        )}
      </aside>
    </div>
  )
}
