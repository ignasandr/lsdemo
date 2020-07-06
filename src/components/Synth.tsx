import React, { Component, SyntheticEvent } from 'react';

export class Synth extends Component {
   handleInput(event: SyntheticEvent) {
       event.preventDefault();
   }

   render() {
       return <>
       <input type="text" onInput={ this.handleInput }/>
       </>
   }
}