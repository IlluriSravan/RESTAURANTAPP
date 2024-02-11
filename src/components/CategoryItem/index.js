import './index.css'

const CategoryItem = props => {
  const {details, onClickItem, isSelected} = props
  const classL = details === isSelected ? 'selected' : 'not-selected'
  const onClick = () => {
    onClickItem(details)
  }
  return (
    <button className={` ${classL}`} onClick={onClick}>
      {details}
    </button>
  )
}
export default CategoryItem
