import { useState, useContext, useEffect } from 'react'
import { InputContext } from '../App'
import { ChromePicker } from 'react-color'

const InputColor = () => {
  const [color, setColor] = useState('#054080')
  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const { inputValue, setInputValue } = useContext(InputContext)

  useEffect(
    (color) => {
      setInputValue({ ...inputValue, color: color })
    },
    [color],
  )

  const handleColorChange = (color) => setColor(color.hex)

  return (
    <div>
      {' '}
      <label className="font-semibold text-md">Select Color</label>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ background: color }}
          className="w-10 h-8 cursor-pointer border-4"
        ></div>
        <span>{color}</span>
      </div>
      {displayColorPicker && (
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  )
}

export default InputColor
