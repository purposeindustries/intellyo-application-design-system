import React from 'react';
import Tile from '../components/tile/';
import Icon from '../components/icon/';

export default class TilesPage extends React.Component {
  static displayName = 'TilesPage';

  render() {
    return (
      <div>
        <Tile
          size="small"
          color="green"
        />
        <br /><br />

        <Tile
          icon={ <Icon icon="ion-android-alarm-clock" color="red" /> }
          color="#CCC"
        />
        <br /><br />

        <Tile
          size="large"
          image="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
        />

        <Tile
          size="large"
          color="#CCC"
          shape="circle"
        />

        <Tile
          size="large"
          color="#CCC"
          shape="square"
        />
      </div>
    );
  }
}
