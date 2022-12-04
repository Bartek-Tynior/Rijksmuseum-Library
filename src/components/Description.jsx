import React from 'react'
import Modal from './Modal'

function Description({ artObject }) {

const newDate = new Date(artObject.acquisition.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

const upperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <div className='details'>
        <div className='description'>
            <h2 className='subheading_detail'>Beschrijving</h2>
            <p className='description_text'>{artObject.description}</p>
        </div>
        
        <div className='dating'>
            <h2 className='subheading_detail'>Daten</h2>
            <p className='dating_presentingDate'>{artObject.dating.presentingDate}</p>
        </div>

        <div className='aqusition'>
            <h2 className='subheading_detail'>Acquisitie</h2>
            {artObject.acquisition.creditLine && <h3 className='aqusition_credits'><span className='label_detail'>Ontvangst: </span> {upperCase(artObject.acquisition.creditLine)}</h3>}
            {artObject.acquisition.method && <h3 className='aqusition_method'><span className='label_detail'>Methode: </span> {upperCase(artObject.acquisition.method)}</h3>}
            {artObject.acquisition.date && <h3 className='aqusition_date'><span className='label_detail'>Datum: </span> {newDate}</h3>}
        </div>

        <div className='materials'>
            <h2 className='subheading_detail'>Materialen</h2>
            <div className='materials_list'>
                {artObject.materials.map(material => (
                <div className='material_box' key={material}>
                    {upperCase(material)}
                </div>
            ))}
            </div>
        </div>

        <div className='colors'>
            <h2 className='subheading_detail'>Kleuren</h2>
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