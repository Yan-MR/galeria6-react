import React, { useState } from 'react'; 

function GaleriaDeImagens() { 
  const [imagens, setImagens] = useState([ 
    'https://picsum.photos/150/150?random', 
    'https://picsum.photos/150/151?random', 
    'https://picsum.photos/150/152?random' 
  ]); 
  const adicionarImagem = () => { 
    setImagens([...imagens, `https://picsum.photos/150/150?random=${Date.now()}`]); 
  }; 
  
  return ( 
    <div> 
      <h2>Galeria de Imagens</h2> 
      <div style={{ display: 'flex', flexWrap: 'wrap' }}> 
        {imagens.map((imagem, index) => ( 
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} /> 
        ))} 
      </div> 
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button> 
    </div> 
  ); 
} 
export default GaleriaDeImagens;
