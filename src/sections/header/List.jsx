import React from 'react'

function List(props) {
    let {url, label} = props;
  return (
    // <li><a href={props.url}>{props.label}</a></li>
    <li><a href={url}>{label}</a></li>
  )
}

export default List