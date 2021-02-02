'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hide documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-86c0757b8788fe3ddfedb604a2af2677"' : 'data-target="#xs-components-links-module-AppModule-86c0757b8788fe3ddfedb604a2af2677"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-86c0757b8788fe3ddfedb604a2af2677"' :
                                            'id="xs-components-links-module-AppModule-86c0757b8788fe3ddfedb604a2af2677"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientsMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientsMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeliveringOrderDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeliveringOrderDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeliveringOrdersInprogressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeliveringOrdersInprogressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditStockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotpasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotpasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginformComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginformComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageStocksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageStocksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersInprogressComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersInprogressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QrproductinfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QrproductinfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetpasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetpasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SalesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesHistoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SalesHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalesMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SalesMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StocksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StocksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StocksHistoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StocksHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StocksMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StocksMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewStocksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewStocksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientId.html" data-type="entity-link">ClientId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Currency.html" data-type="entity-link">Currency</a>
                            </li>
                            <li class="link">
                                <a href="classes/Detail.html" data-type="entity-link">Detail</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link">Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductId.html" data-type="entity-link">ProductId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rates.html" data-type="entity-link">Rates</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsernameValidator.html" data-type="entity-link">UsernameValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link">ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyService.html" data-type="entity-link">CurrencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link">ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});