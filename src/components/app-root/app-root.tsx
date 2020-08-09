import { Component, h } from '@stencil/core';
import { v4 } from 'uuid';

const uuid = v4();
console.log(uuid);

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <p>Testing</p>
        {uuid && <p>{uuid}</p>}
      </div>
    );
  }
}
