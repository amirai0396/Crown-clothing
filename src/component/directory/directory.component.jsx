import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menuItem.component';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'Hats',
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }
  render() {
    return (
      <div className='directory-menu '>
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} /> // using the spread operator we can pass all the section props like this {...spreadoperator} but id we cant because id is not passed as Id it's passed as key{}
        ))}
      </div>
    );
  }
}

export default Directory;
