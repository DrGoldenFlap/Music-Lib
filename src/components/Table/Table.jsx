import React, {useState} from 'react';
import "./Table.css"

const Table = (props) => {
    
    
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
      { (props.allMusic.length > 0) ? props.allMusic.map( (song, index) => {
           return (
            <tr key={ index }>
              <td>{ song.title }</td>
              <td>{ song.album }</td>
              <td>{ song.artist}</td>
              <td>{ song.genre }</td>
              <td>{ song.releaseDate }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table