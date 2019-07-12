import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'pn-side-menu',
  styleUrl: './side-menu.css',
  shadow: true
})
export class SideMenu {
  @Prop({ reflectToAttr: true }) text: string;
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;
  @State() showContactInfo = false;

  onCloseMenu() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />
    if (this.showContactInfo) {
      mainContent = (
        <div id='contact-info'>
          <h2>Contact Information</h2>
          <p>Reach out to us through phone or email.</p>
          <ul>
            <li>Phone: 1337-133337</li>
            <li>Email: <a href="mailto:hello@world.now">hello@world.now</a></li>
          </ul>
        </div>
      );
    }

    return [
      <div class='backdrop' onClick={this.onCloseMenu.bind(this)}></div>,
      <aside>
        <header><h1>{this.text}</h1>
          <button onClick={this.onCloseMenu.bind(this)} id='close-side-menu-btn'>X</button>
        </header>
        <section id="side-menu-tabs">
          <button onClick={this.onContentChange.bind(this, 'nav')} class={!this.showContactInfo ? 'active' : null}>Navigation</button>
          <button onClick={this.onContentChange.bind(this, 'contact')} class={this.showContactInfo ? 'active' : null}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}