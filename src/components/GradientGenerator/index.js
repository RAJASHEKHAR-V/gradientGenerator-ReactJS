import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  GenerateHeading,
  ParaGraph,
  UnOrderedDirectionsList,
  ColorContainer,
  InputContainer,
  ColorParagraph,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    initialDirection: gradientDirectionsList[0].value,
    changeColor1: '#8ae323',
    changeColor2: '#014f7b',
    applyColor1: '#8ae323',
    applyColor2: '#014f7b',
  }

  onDirectionButton = directionValue => {
    this.setState({initialDirection: directionValue})
  }

  onChangeColorOne = event => {
    this.setState({changeColor1: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({changeColor2: event.target.value})
  }

  onGenerateButton = () => {
    const {changeColor1, changeColor2} = this.state
    this.setState({
      applyColor1: changeColor1,
      applyColor2: changeColor2,
    })
  }

  render() {
    const {
      initialDirection,
      changeColor1,
      changeColor2,
      applyColor1,
      applyColor2,
    } = this.state

    return (
      <GradientContainer
        applyDirection={initialDirection}
        applyColor1={applyColor1}
        applyColor2={applyColor2}
        data-testid="gradientGenerator"
      >
        <GenerateHeading>Generate a CSS color Gradient</GenerateHeading>
        <ParaGraph>Choose Direction</ParaGraph>
        <UnOrderedDirectionsList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionItem={eachDirection}
              onDirectionButton={this.onDirectionButton}
              isActive={eachDirection.value === initialDirection}
            />
          ))}
        </UnOrderedDirectionsList>
        <ParaGraph>Pick the Colors</ParaGraph>
        <ColorContainer>
          <InputContainer>
            <ColorParagraph>{changeColor1}</ColorParagraph>
            <ColorInput
              type="color"
              value={changeColor1}
              onChange={this.onChangeColorOne}
            />
          </InputContainer>
          <InputContainer>
            <ColorParagraph>{changeColor2}</ColorParagraph>
            <ColorInput
              type="color"
              value={changeColor2}
              onChange={this.onChangeColorTwo}
            />
          </InputContainer>
        </ColorContainer>
        <GenerateButton type="submit" onClick={this.onGenerateButton}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
