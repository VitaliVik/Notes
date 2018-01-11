import React from 'react';
import ReactDOM from 'react-dom';
import { markdown } from 'markdown';

import { Grid } from 'react-bootstrap';
export default class NoteInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.note) {
            return (<div>Укажите заметку</div>);
        }
        var text = this.props.note.Text;
        var html = "Заметка пустая";
        if(text){
            html = markdown.toHTML(text);
        }
        
        return (
            <Grid fluid={true}>
                <h1>{this.props.note.Title}</h1>
                <div dangerouslySetInnerHTML={{__html: html}} ></div>
            </Grid>
        );
    }
}