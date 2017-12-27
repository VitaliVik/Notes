import React from 'react';
import ReactDOM from 'react-dom';

export default class NoteInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (!this.props.note) {
            return (<div>Укажите заметку</div>);
        }
        return (
            <div>
                <div>{this.props.note.Text}</div>
            </div>
        );
    }
}