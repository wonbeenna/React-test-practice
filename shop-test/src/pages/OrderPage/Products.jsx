import React from 'react';

const Products = ({name, imagePath}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <img style={{width: '75%'}} src={`http://localhost:5000/${imagePath}`} alt={`${name} product`} />
      <form style={{marginTop: 10}}>
        <label style={{textAlign: 'center'}}>{name}</label>
        <input style={{marginLeft: 7}} type="number" name="quantity" min="0" defaultValue={0} />
      </form>
    </div>
  );
};

export default Products;
