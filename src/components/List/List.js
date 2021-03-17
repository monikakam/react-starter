import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        image: PropTypes.string,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }
  render() {
    return (      
      <section className={styles.component}>        
        <h2><Hero titleText={this.props.title} image={this.props.image}/></h2>
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
            <ul>
                <li>Animals</li>
                <li>Animals</li>
                <li>Animals</li>
            </ul>
        </div>
                
      </section>      
    )
  }
}

export default List;