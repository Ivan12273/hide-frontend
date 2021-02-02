import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './_common/material.module';
import { HeaderComponent } from './_common/header/header.component';
import { FooterComponent } from './_common/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { ClientComponent } from './components/client/client.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { SalesComponent } from './components/sales/sales.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MainComponent } from './_common/main/main.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { UserDetailsComponent } from './components/admin/admin-users/user-details/user-details.component';
import { EditUserComponent } from './components/admin/admin-users/user-details/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/admin/admin-users/user-details/delete-user/delete-user.component';
import { RegisterProductComponent } from './components/stocks/register-product/register-product.component';
import { ManageStocksComponent } from './components/stocks/manage-stocks/manage-stocks.component';
import { StocksMenuComponent } from './components/stocks/stocks-menu/stocks-menu.component';
import { StocksHistoryComponent } from './components/stocks/stocks-history/stocks-history.component';
import { ClientsMenuComponent } from './components/client/clients-menu/clients-menu.component';
import { RegisterClientComponent } from './components/client/register-client/register-client.component';
import { ManageClientsComponent } from './components/client/manage-clients/manage-clients.component';
import { ClientDetailsComponent } from './components/client/manage-clients/client-details/client-details.component';
import { EditClientComponent } from './components/client/manage-clients/client-details/edit-client/edit-client.component';
import { DeleteClientComponent } from './components/client/manage-clients/client-details/delete-client/delete-client.component';
import { SalesMenuComponent } from './components/sales/sales-menu/sales-menu.component';
import { NewOrderComponent } from './components/sales/new-order/new-order.component';
import { OrdersInprogressComponent } from './components/sales/orders-inprogress/orders-inprogress.component';
import { SalesHistoryComponent } from './components/sales/sales-history/sales-history.component';
import { ViewStocksComponent } from './components/sales/view-stocks/view-stocks.component';
import { EditStockComponent } from './components/stocks/manage-stocks/edit-stock/edit-stock.component';
import { DeleteProductComponent } from './components/stocks/manage-stocks/delete-product/delete-product.component';
import { ForgotpasswordComponent } from './components/login/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/login/resetpassword/resetpassword.component';
import { LoginformComponent } from './components/login/loginform/loginform.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { ConfirmOrderComponent } from './components/sales/new-order/confirm-order/confirm-order.component';
import { ClientOrderComponent } from './components/sales/new-order/client-order/client-order.component';
import { ProductOrderComponent } from './components/sales/new-order/product-order/product-order.component';
import { OrderDetailsComponent } from './components/sales/orders-inprogress/order-details/order-details.component';
import { DeleteOrderComponent } from './components/sales/orders-inprogress/order-details/delete-order/delete-order.component';
import { DeliveringOrderDetailsComponent } from './components/orders/delivering-order-details/delivering-order-details.component';
import { DeliveringOrdersInprogressComponent } from './components/orders/delivering-orders-inprogress/delivering-orders-inprogress.component';
import { QrproductinfoComponent } from './components/login/qrproductinfo/qrproductinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CreateUserComponent,
    AdminUsersComponent,
    ClientComponent,
    StocksComponent,
    SalesComponent,
    OrdersComponent,
    MainComponent,
    AdminMenuComponent,
    UserDetailsComponent,
    EditUserComponent,
    DeleteUserComponent,
    RegisterProductComponent,
    ManageStocksComponent,
    StocksMenuComponent,
    StocksHistoryComponent,
    ClientsMenuComponent,
    RegisterClientComponent,
    ManageClientsComponent,
    ClientDetailsComponent,
    EditClientComponent,
    DeleteClientComponent,
    SalesMenuComponent,
    NewOrderComponent,
    OrdersInprogressComponent,
    SalesHistoryComponent,
    ViewStocksComponent,
    EditStockComponent,
    DeleteProductComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    LoginformComponent,
    NotFoundComponent,
    ConfirmOrderComponent,
    ClientOrderComponent,
    ProductOrderComponent,
    OrderDetailsComponent,
    DeleteOrderComponent,
    DeliveringOrderDetailsComponent,
    DeliveringOrdersInprogressComponent,
    QrproductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
