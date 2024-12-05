import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcBadgeComponent, IgcButtonComponent, IgcButtonGroupComponent, IgcCardComponent, IgcIconComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent, IgcToggleButtonComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent, IgcBadgeComponent, IgcSelectComponent, IgcButtonGroupComponent, IgcToggleButtonComponent, IgcIconComponent, IgcRippleComponent, IgcButtonComponent, IgcCardComponent);

@customElement('app-product-details')
export default class ProductDetails extends LitElement {
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
    .content {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 48px;
      min-width: 50px;
      max-width: 1680px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .breadcrumbs {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .product-details {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      margin: 0 8px 0 0;
      min-width: 100px;
      min-height: 100px;
      flex-shrink: 0;
    }
    .group_2 {
      background-image: url("/src/assets/Alternator1.jpg");
      background-size: cover;
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .group_3 {
      background-image: url("/src/assets/Alternator3.png");
      background-size: cover;
      background-repeat: no-repeat;
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .group_4 {
      background-image: url("/src/assets/Alternator2.png");
      background-size: cover;
      background-repeat: no-repeat;
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .group_5 {
      border-color: var(--ig-gray-200);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 32px 0 0;
      min-width: 240px;
      min-height: 240px;
      max-width: 560px;
      max-height: 560px;
      flex-grow: 1;
      flex-basis: 50%;
    }
    .group_6 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 400px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 50%;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .product-info {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .specs {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 260px;
      min-height: 50px;
      max-width: 500px;
      flex-grow: 1;
      flex-basis: 30%;
    }
    .table {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_10 {
      background-color: var(--ig-gray-100);
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .description {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      max-width: 1000px;
      flex-grow: 1;
      flex-basis: 70%;
    }
    .group_11 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      position: relative;
      min-width: 50px;
      min-height: 40px;
    }
    .also-purchased {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      overflow: auto;
      min-width: 0;
    }
    .card {
      width: 200px;
      height: max-content;
      min-width: 200px;
      max-width: 200px;
      flex-shrink: 0;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      margin: 0 0 8px;
      min-width: 50px;
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
    .group_14 {
      justify-content: flex-start;
      align-items: flex-start;
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
      height: 50px;
      min-width: 50px;
      min-height: 50px;
      max-height: 50px;
      flex-shrink: 0;
    }
    .group_15 {
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
    .hyperlink {
      color: var(--ig-primary-500);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_1 {
      margin: 0 8px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_2 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .image_1 {
      object-fit: contain;
      flex-grow: 1;
      flex-basis: 0;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink_1 {
      color: var(--ig-primary-500);
      margin: 2px 0 0 8px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .content_4 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: var(--ig-gray-600);
      height: max-content;
      min-width: min-content;
    }
    .hyperlink_2 {
      color: var(--ig-primary-500);
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_4 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-surface-500);
    }
    .content_2 {
      height: max-content;
    }
    .text_5 {
      color: var(--ig-gray-800);
      margin: 0 16px 0 0;
      height: max-content;
      min-width: 120px;
      flex-shrink: 0;
    }
    .text_6 {
      color: var(--ig-gray-800);
      margin: 0 16px 0 0;
      width: 120px;
      height: max-content;
      min-width: min-content;
      max-width: 120px;
      flex-shrink: 0;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: var(--ig-success-500);
      margin: 0 8px 0 0;
    }
    .text_7 {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .image_2 {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .icon_2 {
      color: var(--ig-primary-500);
    }
    .h6 {
      color: var(--ig-gray-800);
      width: 130px;
      height: max-content;
      min-width: min-content;
      max-width: 130px;
    }
    .text_8 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_9 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_10 {
      color: var(--ig-gray-700);
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 160px;
      min-height: 160px;
      max-height: 160px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .rating {
      --ig-size: var(--ig-size-medium);
      width: max-content;
      height: max-content;
    }
    .select {
      margin: 0 16px 0 0;
      height: max-content;
      max-width: 140px;
      flex-shrink: 0;
    }
    .button-group {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
      max-width: 400px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      max-width: 400px;
    }
    .rating_1 {
      --ig-size: var(--ig-size-small);
      width: max-content;
      height: max-content;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .button_2::part(base) {
      color: var(--ig-surface-500);
      background-color: var(--ig-primary-500);
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
    .badge {
      margin: 0 0 8px;
      width: max-content;
      height: max-content;
    }
  `;

  @state()
  private value: number = 4.5;

  @state()
  private value1: string = '1';

  @state()
  private value2: number = 4;

  @state()
  private value3: number = 3.5;

  @state()
  private value4: number = 5;

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
        <div class="column-layout content">
          <div class="column-layout group">
            <div class="row-layout breadcrumbs">
              <a class="typography__body-2 hyperlink">
                Home
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink">
                Auto Body Parts
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink">
                Engine &amp; Drivetrain
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink">
                Starters, Alternators, Batteries &amp; Components
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <p class="typography__body-2 text_2">
                Alternator
              </p>
            </div>
            <div class="row-layout product-details">
              <div class="column-layout group_1">
                <div class="group_2"></div>
                <div class="group_3"></div>
                <div class="group_4"></div>
              </div>
              <div class="row-layout group_5">
                <img src="/src/assets/Alternator1.jpg" class="image_1" />
              </div>
              <div class="column-layout group_6">
                <h5 class="content_1">
                  Gold Alternator

                </h5>
                <div class="row-layout group_7">
                  <igc-rating value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="rating"></igc-rating>
                  <a class="typography__body-2 hyperlink_1">
                    (2 customer reviews)
                  </a>
                </div>
                <h4 class="content_4">
                  $59.90
                </h4>
                <p class="typography__subtitle-1 text_3">
                  Part #ABC123-456789 | SKU: A1234-01
                </p>
                <a class="typography__body-2 hyperlink_2">
                  Limited Lifetime Warranty
                </a>
                <p class="typography__body-2 text_4">
                  Generic Brand alternators are engineered to provide the amp output necessary to power today’s vehicles. Every unit is 100% NEW (not remanufactured) and made with proprietary components and processes to ensure maximum life and performance.
                </p>
                <igc-badge variant="success" class="badge">
                  IN STOCK
                </igc-badge>
                <div class="row-layout group_8">
                  <igc-select ?outlined="${false}" label="Quantitiy" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail.value}" class="select">
                    <igc-select-item value="1">
                      1
                    </igc-select-item>
                    <igc-select-item value="1">
                      2
                    </igc-select-item>
                    <igc-select-item value="1">
                      3
                    </igc-select-item>
                    <igc-select-item value="1">
                      4
                    </igc-select-item>
                  </igc-select>
                </div>
                <p class="typography__body-2 content_1">
                  Select delivery option:
                </p>
                <igc-button-group class="button-group">
                  <igc-toggle-button>
                    <span class="material-icons">
                      store_mall_directory
                    </span>
                    <span>Free In-Store Pickup</span>
                    <igc-ripple></igc-ripple>
                  </igc-toggle-button>
                  <igc-toggle-button>
                    <span class="material-icons">
                      home
                    </span>
                    <span>Home Delivery</span>
                    <igc-ripple></igc-ripple>
                  </igc-toggle-button>
                </igc-button-group>
                <igc-button type="button" class="button button_2">
                  <span class="material-icons icon">
                    shopping_cart
                  </span>
                  <span>ADD TO CART</span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
            <div class="row-layout product-info">
              <div class="column-layout specs">
                <h5 class="content_2">
                  Product Specifications
                </h5>
                <div class="column-layout table">
                  <div class="row-layout group_9">
                    <p class="typography__body-1 text_5">
                      Part #
                    </p>
                    <p class="typography__body-1 text_2">
                      ABC123-456789
                    </p>
                  </div>
                  <div class="row-layout group_10">
                    <p class="typography__body-1 text_5">
                      SKU #
                    </p>
                    <p class="typography__body-1 text_2">
                      740988
                    </p>
                  </div>
                  <div class="row-layout group_9">
                    <p class="typography__body-1 text_5">
                      Weight
                    </p>
                    <p class="typography__body-1 text_2">
                      10 lbs
                    </p>
                  </div>
                  <div class="row-layout group_10">
                    <p class="typography__body-1 text_5">
                      Type
                    </p>
                    <p class="typography__body-1 text_2">
                      Alternator
                    </p>
                  </div>
                  <div class="row-layout group_9">
                    <p class="typography__body-1 text_5">
                      System Voltage
                    </p>
                    <p class="typography__body-1 text_2">
                      12 V
                    </p>
                  </div>
                  <div class="row-layout group_10">
                    <p class="typography__body-1 text_6">
                      Pulleys Included
                    </p>
                    <p class="typography__body-1 text_2">
                      2
                    </p>
                  </div>
                </div>
              </div>
              <div class="column-layout description">
                <h5 class="content_1">
                  Product Description
                </h5>
                <div class="column-layout table">
                  <div class="row-layout group_11">
                    <span class="material-icons icon_1">
                      check_circle
                    </span>
                    <p class="typography__body-1 text_7">
                      Key components are greased to help with long term reliability in harsh conditions
                    </p>
                  </div>
                  <div class="row-layout group_11">
                    <span class="material-icons icon_1">
                      check_circle
                    </span>
                    <p class="typography__body-1 text_7">
                      Every unit is built with 100% NEW components that are designed to meet the highest quality standards
                    </p>
                  </div>
                  <div class="row-layout group_11">
                    <span class="material-icons icon_1">
                      check_circle
                    </span>
                    <p class="typography__body-1 text_7">
                      Every unit is triple tested (component, subassembly and end of line) to ensure quality and performance
                    </p>
                  </div>
                </div>
                <p class="typography__body-2 content_2">
                  New Alternators are manufactured with all new components and are the ideal high quality replacement for many vehicles on the road today. Key components are lubricated to help with performance and long life reliability. Alternators have regulators that are computer tested for voltage stability, terminal function, and electronic circuit board integrity. These premium aftermarket replacement components are manufactured to meet your expectations for fit, form, and function. Some ACDelco Gold parts may have formerly appeared as ACDelco Professional.
                </p>
              </div>
            </div>
            <div class="column-layout also-purchased">
              <h5 class="content_1">
                Customers Also Purchased
              </h5>
              <div class="row-layout group_12">
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Alternator1.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Gold Alternator
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $59.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_1">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Tail Lamp Assembly
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $19.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_2">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Spark Plugs
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $11.00
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_3">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Oil Filters
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $24.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_4">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Headlight Assembly
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $49.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_5">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Winter Tires Set
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="content_4">
                      $44.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_6">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Exhaust Pipe
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="h6">
                      $34.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_7">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card ?elevated="${true}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" class="image_2" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Battery
                    </h3>
                    <h5 slot="subtitle">
                      SKU: A1234-01
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <div class="row-layout group_13">
                      <igc-rating value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="rating_1"></igc-rating>
                    </div>
                    <h6 class="h6">
                      $24.95
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" type="button" slot="start" class="button_1 button_1_8">
                      <span class="material-icons icon_2">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout sitemap">
          <div class="column-layout group_14">
            <p class="typography__subtitle-2 content_1">
              Contact Us
            </p>
            <p class="typography__body-2 content_1">
              1234 Street Name, CityName, ST
            </p>
            <p class="typography__body-2 content_1">
              10520 United States
            </p>
            <p class="typography__subtitle-2 text_8">
              Phone Number
            </p>
            <p class="typography__body-2 content_1">
              1-234-567-8901
            </p>
          </div>
          <div class="column-layout table">
            <p class="typography__subtitle-2 content_1">
              Help
            </p>
            <p class="typography__body-2 content_1">
              FAQ
            </p>
            <p class="typography__body-2 content_1">
              Returns
            </p>
            <p class="typography__body-2 content_1">
              Coupons &amp; Discounts
            </p>
            <p class="typography__body-2 content_1">
              Shipping &amp; Returns
            </p>
          </div>
          <div class="column-layout table">
            <p class="typography__subtitle-2 content_1">
              About Us
            </p>
            <p class="typography__body-2 content_1">
              Company Info
            </p>
            <p class="typography__body-2 content_1">
              Press Releases
            </p>
            <p class="typography__body-2 content_1">
              Careers
            </p>
            <p class="typography__body-2 content_1">
              Reviews
            </p>
          </div>
          <div class="column-layout table">
            <p class="typography__subtitle-2 content_1">
              Services
            </p>
            <p class="typography__body-2 content_1">
              Buy Online
            </p>
            <p class="typography__body-2 content_1">
              In-Store
            </p>
            <p class="typography__body-2 content_1">
              Repair Help
            </p>
            <p class="typography__body-2 content_1">
              Find a Repair Shop
            </p>
          </div>
          <div class="column-layout table">
            <p class="typography__subtitle-2 content_1">
              Blog
            </p>
            <p class="typography__body-2 content_1">
              Car Building Basics
            </p>
            <p class="typography__body-2 content_1">
              Do it Yourself
            </p>
            <p class="typography__body-2 content_1">
              Your Home Workshop
            </p>
            <p class="typography__body-2 content_1">
              Advanced Bulding
            </p>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_9">
            Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
          </p>
          <div class="row-layout group_15">
            <p class="typography__body-2 text_10">
              Terms of Use
            </p>
            <p class="typography__body-2 text_10">
              Privacy Policy
            </p>
            <p class="typography__body-2 text_10">
              Site Map
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
