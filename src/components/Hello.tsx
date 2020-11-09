import React, { useContext } from 'react'
import { ThemeContext } from '../App'

// 已经使用ts做类型检查了，就不必：Hello.propTypes 做类型定义了
interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)

  const style = {
    background: theme.background,
    color: theme.color,
  }

  return <h2 style={style}>{props.message}</h2>
}

// 定义类型的默认值
Hello.defaultProps = {
  message: "Hello World"
}

export default Hello