const MapEmbed = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3826.3339015080296!2d107.591681!3d16.458622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a138ab421f95%3A0x2cbb8cc5c63bdeb4!2sHcc%20Building!5e0!3m2!1sen!2sus!4v1756199840920!5m2!1sen!2sus'

  return (
    <div style={{ width: '100%', height: '280px' }}>
      <iframe
        src={mapSrc}
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Embedded Map'
      ></iframe>
    </div>
  )
}

export default MapEmbed
