import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcButtonGroupComponent, IgcCardComponent, IgcDropdownComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent, IgcToggleButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcDropdownComponent, IgcCardComponent, IgcButtonGroupComponent, IgcToggleButtonComponent);

@customElement('app-all-products')
export default class AllProducts extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .page-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 960px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .inner-pages-header {
      background-color: #151725;
      background-image: url("/src/assets/NewHeader.png");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 140px;
    }
    .row-layout {
      display: flex;
    }
    .content {
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      max-width: 1680px;
    }
    .filters {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 30px;
      position: relative;
      padding: 16px 0 0 24px;
      min-width: 220px;
      min-height: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .products {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-height: 50px;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      min-width: 50px;
    }
    .card {
      width: 260px;
      height: max-content;
      min-width: 260px;
      max-width: 260px;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 400px;
      min-height: 50px;
    }
    .sitemap {
      border-color: var(--ig-gray-200);
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 32px;
      overflow: hidden;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 170px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .footer {
      background-color: var(--ig-gray-100);
      border-color: var(--ig-gray-200);
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-height: 50px;
    }
    .image {
      object-fit: none;
      height: 22px;
      min-width: 0;
      min-height: 0;
      max-height: 22px;
      flex-shrink: 0;
    }
    .text {
      color: var(--ig-surface-500);
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: var(--ig-primary-500);
      margin: 0 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .image_1 {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .h6 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-primary-500);
    }
    .text_2 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_4 {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 210px;
      min-height: 210px;
      max-height: 210px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .list {
      height: max-content;
      min-width: min-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      margin: 0 0 8px;
      height: max-content;
    }
    .button-group {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .button_1_1::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_2::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_3::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_4::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_5::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_6::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_7::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_8::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_9::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_10::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_11::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
    .button_1_12::part(base) {
      color: var(--ig-primary-500);
      background-color: transparent;
    }
  `;

  @query('#dropdown')
  private dropdown?: IgcDropdownComponent;

  @query('#button')
  private button?: IgcButtonComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="column-layout inner-pages-header">
          <img src="/src/assets/AutoDeals_Logo.svg" class="image" />
          <p class="typography__body-1 text">
            Enjoy 20% off on all your weekend purchases
          </p>
        </div>
        <div class="row-layout content">
          <div class="row-layout group">
            <div class="column-layout filters">
              <div class="column-layout group_1">
                <p class="typography__subtitle-2 text_1">
                  CATEGORY
                </p>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="title">General Body Parts</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Lighting</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Engine &amp; Drivetrain</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Break &amp; Suspension</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Interior</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Exterior</div>
                  </igc-list-item>
                </igc-list>
                <a class="typography__body-2 hyperlink">
                  Show All
                </a>
              </div>
              <div class="column-layout group_1">
                <p class="typography__subtitle-2 text_1">
                  PRICE
                </p>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="title">$1 - $10</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">$10 - $20</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">$20 - $50</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">$50 - $100</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">$100 and Up</div>
                  </igc-list-item>
                </igc-list>
                <a class="typography__body-2 hyperlink">
                  Show All
                </a>
              </div>
              <div class="column-layout group_1">
                <p class="typography__subtitle-2 text_1">
                  BRAND
                </p>
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="title">Anzo</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Dorman</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Hella</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Keystone Collision</div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="title">Pilot Certified</div>
                  </igc-list-item>
                </igc-list>
                <a class="typography__body-2 hyperlink">
                  Show All
                </a>
              </div>
            </div>
            <div class="column-layout products">
              <div class="row-layout group_2">
                <h5 class="content_1">
                  Newest Arrivals
                </h5>
                <div class="row-layout group_3">
                  <p class="typography__body-1 content_1">
                    1-6 OF 202 RESULTS
                  </p>
                  <igc-button variant="flat" type="button" id="button" @click="${() => this.dropdown?.toggle(this.button)}" class="button">
                    <span>SORT BY</span>
                    <span class="material-icons">
                      keyboard_arrow_down
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-dropdown id="dropdown" class="dropdown">
                    <igc-dropdown-item>
                      Newest Arrivals
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Featured
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Price: Low to High
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Price: High to Low
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Avg. Customer Review
                    </igc-dropdown-item>
                  </igc-dropdown>
                </div>
              </div>
              <div class="row-layout group_4">
                <igc-card @click="${() => Router.go(`/product-details`)}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Alternator1.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Gold Alternator
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $59.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_1">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Tail Lamp Assembly
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $19.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_2">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Spark Plugs
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $11.00
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_3">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Oil Filters
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $24.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_4">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_7243970_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Engine pistons and cog
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $32.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_5">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Winter tires set
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $44.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_6">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_15825769_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Carboxylic bumper
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $49.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_7">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Battery
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $24.95
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_8">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_79651016_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Car Wheel
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $59.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_9">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Chrome exhaust pipe
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $34.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_10">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Headlight Assembly
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $49.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_11">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_303215620_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Braking Discs
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $21.99
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_12">
                      <span class="material-icons icon">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
              </div>
              <div class="row-layout group_5">
                <div class="row-layout group_6">
                  <igc-button variant="flat" type="button" class="button">
                    <span class="material-icons">
                      arrow_back
                    </span>
                    <span>PREVIOUS</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button-group class="button-group">
                    <igc-toggle-button>
                      1
                      <igc-ripple></igc-ripple>
                    </igc-toggle-button>
                    <igc-toggle-button>
                      2
                      <igc-ripple></igc-ripple>
                    </igc-toggle-button>
                    <igc-toggle-button>
                      3
                      <igc-ripple></igc-ripple>
                    </igc-toggle-button>
                    <igc-toggle-button>
                      4
                      <igc-ripple></igc-ripple>
                    </igc-toggle-button>
                    <igc-toggle-button>
                      5
                      <igc-ripple></igc-ripple>
                    </igc-toggle-button>
                  </igc-button-group>
                  <igc-button variant="flat" type="button" class="button">
                    <span>NEXT</span>
                    <span class="material-icons">
                      arrow_forward
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout sitemap">
          <div class="column-layout group_7">
            <p class="typography__subtitle-2 text_1">
              Contact Us
            </p>
            <p class="typography__body-2 text_1">
              1234 Street Name, CityName, ST
            </p>
            <p class="typography__body-2 text_1">
              10520 United States
            </p>
            <p class="typography__subtitle-2 text_2">
              Phone Number
            </p>
            <p class="typography__body-2 text_1">
              1-234-567-8901
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_1">
              Help
            </p>
            <p class="typography__body-2 text_1">
              FAQ
            </p>
            <p class="typography__body-2 text_1">
              Returns
            </p>
            <p class="typography__body-2 text_1">
              Coupons &amp; Discounts
            </p>
            <p class="typography__body-2 text_1">
              Shipping &amp; Returns
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_1">
              About Us
            </p>
            <p class="typography__body-2 text_1">
              Company Info
            </p>
            <p class="typography__body-2 text_1">
              Press Releases
            </p>
            <p class="typography__body-2 text_1">
              Careers
            </p>
            <p class="typography__body-2 text_1">
              Reviews
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_1">
              Services
            </p>
            <p class="typography__body-2 text_1">
              Buy Online
            </p>
            <p class="typography__body-2 text_1">
              In-Store
            </p>
            <p class="typography__body-2 text_1">
              Repair Help
            </p>
            <p class="typography__body-2 text_1">
              Find a Repair Shop
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_1">
              Blog
            </p>
            <p class="typography__body-2 text_1">
              Car Building Basics
            </p>
            <p class="typography__body-2 text_1">
              Do it Yourself
            </p>
            <p class="typography__body-2 text_1">
              Your Home Workshop
            </p>
            <p class="typography__body-2 text_1">
              Advanced Bulding
            </p>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_3">
            Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
          </p>
          <div class="row-layout group_9">
            <p class="typography__body-2 text_4">
              Terms of Use
            </p>
            <p class="typography__body-2 text_4">
              Privacy Policy
            </p>
            <p class="typography__body-2 text_4">
              Site Map
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
