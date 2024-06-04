import clsx from 'clsx'

const Title = ({title, className}) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize")}>{title}</h2>
  )
}

export default Title
