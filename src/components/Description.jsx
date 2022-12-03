import React from 'react'

function Description({ artObject }) {
  return (
    <div className='details'>
        <div className='description'>
            <h2>Description</h2>
        {artObject.description}
        </div>
        
        <div className='dating'>
            <h2>Dating</h2>
            {artObject.dating.presentingDate}
        </div>

        <div className='materials'>
            <h2>Materials</h2>
            <div className='materials_list'>
                {artObject.materials.map(material => (
                <div className='material_box' key={material}>
                    {material}
                </div>
            ))}
            </div>
        </div>

        <div className='colors'>
            <h2>Colors</h2>
            <div className='color_list'>
                {artObject.colors.map(color => (
                <div className='color_box' style={{backgroundColor: color.hex}} key={color.hex}>
                    {color.hex}
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Description