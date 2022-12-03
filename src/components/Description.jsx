import React from 'react'
import Modal from './Modal'

function Description({ artObject }) {
  return (
    <div className='details'>
        <div className='description'>
            <h2 className='subheading_detail'>Description</h2>
        {artObject.description}
        </div>
        
        <div className='dating'>
            <h2 className='subheading_detail'>Dating</h2>
            {artObject.dating.presentingDate}
        </div>

        <div className='aqusition'>
            <h2 className='subheading_detail'>Acquisitie</h2>
            <h3>{artObject.acquisition.creditLine}</h3>
            <h3>{artObject.acquisition.date}</h3>
            <h3>{artObject.acquisition.method}</h3>
        </div>

        <div className='materials'>
            <h2 className='subheading_detail'>Materials</h2>
            <div className='materials_list'>
                {artObject.materials.map(material => (
                <div className='material_box' key={material}>
                    {material}
                </div>
            ))}
            </div>
        </div>

        <div className='colors'>
            <h2 className='subheading_detail'>Colors</h2>
            <div className='color_list'>
                {artObject.colors.map(color => (
                <div className='color_box' style={{backgroundColor: color.hex}} key={color.hex}>
                    {color.hex}
                </div>
            ))}
            </div>
        </div>


        <div className='show_image'>
            <Modal imgSrc={artObject.webImage.url} />
        </div>
    </div>
  )
}

export default Description