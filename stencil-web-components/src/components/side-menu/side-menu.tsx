import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pn-side-menu',
  styleUrl: './side-menu.css',
  shadow: true
})
export class SideMenu {
  @Prop({ reflectToAttr: true }) text: string;
  @Prop({ reflectToAttr: true }) open: boolean;

  render() {
    return (
      <aside>
        <header><h1>{this.text}</h1></header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}