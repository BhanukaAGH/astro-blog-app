import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div
      onClick={handleClick}
      className='relative flex items-center gap-2 rounded-full bg-black dark:bg-white  px-1.5 cursor-pointer'
    >
      <div
        className={`absolute ${
          theme === 'light' ? 'translate-x-8' : 'translate-x-0'
        } rounded-full aspect-square w-6 bg-white dark:bg-black transition-transform duration-500`}
      />
      <p className='pointer-events-none'>🌙</p>
      <p className='pointer-events-none'>🌞</p>
    </div>
  )
}

export default ThemeToggle
