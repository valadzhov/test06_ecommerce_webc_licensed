import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .row-layout {
      display: flex;
    }
    .group {
      border-color: var(--ig-gray-200);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 24px 0 0;
      height: 71px;
      min-height: 71px;
      max-height: 71px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      overflow: hidden;
      position: relative;
    }
    .group_2 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      margin: 0 0 0 8px;
      min-height: 50px;
    }
    .image {
      object-fit: none;
      width: 180px;
      height: 70px;
      min-width: 180px;
      min-height: 0;
      max-width: 180px;
      max-height: 70px;
      flex-shrink: 0;
    }
    .icon {
      color: var(--ig-secondary-400);
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .button::part(base) {
      color: var(--ig-gray-700);
    }
    .icon-button::part(base) {
      color: var(--ig-secondary-400);
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <img src="/src/assets/AutoShop_Logo.svg" @click="${() => Router.go(`/home`)}" class="image" />
        <div class="row-layout group_1">
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/all-products`)}" class="button">
            Auto Body Parts
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Lighting
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Engine &amp; Drivetrain
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Brakes &amp; Suspension
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Engine &amp; Drivetrain
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Interior
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" class="button">
            Exterior
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout group_2">
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons icon">
              search
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons icon">
              account_circle
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" @click="${() => Router.go(`/shopping-cart`)}" class="icon-button">
            <span class="material-icons icon">
              shopping_cart
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
      </div>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
