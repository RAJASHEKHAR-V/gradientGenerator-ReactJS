import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItem, onDirectionButton, isActive} = props
  const {value, displayText} = directionItem
  const onClickOfDirection = () => {
    onDirectionButton(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickOfDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
