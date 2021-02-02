import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { UserDetailsComponent } from './components/admin/admin-users/user-details/user-details.component';
import { EditUserComponent } from './components/admin/admin-users/user-details/edit-user/edit-user.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './_common/main/main.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StocksMenuComponent } from './components/stocks/stocks-menu/stocks-menu.component';
import { RegisterProductComponent } from './components/stocks/register-product/register-product.component';
import { ManageStocksComponent } from './components/stocks/manage-stocks/manage-stocks.component';
import { StocksHistoryComponent } from './components/stocks/stocks-history/stocks-history.component';
import { ClientsMenuComponent } from './components/client/clients-menu/clients-menu.component';
import { ManageClientsComponent } from './components/client/manage-clients/manage-clients.component';
import { ClientDetailsComponent } from './components/client/manage-clients/client-details/client-details.component';
import { EditClientComponent } from './components/client/manage-clients/client-details/edit-client/edit-client.component';
import { RegisterClientComponent } from './components/client/register-client/register-client.component';
import { SalesMenuComponent } from './components/sales/sales-menu/sales-menu.component';
import { NewOrderComponent } from './components/sales/new-order/new-order.component';
import { OrdersInprogressComponent } from './components/sales/orders-inprogress/orders-inprogress.component';
import { SalesHistoryComponent } from './components/sales/sales-history/sales-history.component';
import { ViewStocksComponent } from './components/sales/view-stocks/view-stocks.component';
import { EditStockComponent } from './components/stocks/manage-stocks/edit-stock/edit-stock.component';
import { LoginformComponent } from './components/login/loginform/loginform.component';
import { ResetpasswordComponent } from './components/login/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/login/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { ProductOrderComponent } from './components/sales/new-order/product-order/product-order.component';
import { ClientOrderComponent } from './components/sales/new-order/client-order/client-order.component';
import { OrderDetailsComponent } from './components/sales/orders-inprogress/order-details/order-details.component';
import { DeliveringOrderDetailsComponent } from './components/orders/delivering-order-details/delivering-order-details.component';
import { DeliveringOrdersInprogressComponent } from './components/orders/delivering-orders-inprogress/delivering-orders-inprogress.component';
import { QrproductinfoComponent } from './components/login/qrproductinfo/qrproductinfo.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sales', component: SalesComponent,
        children: [
          { path: '', component: SalesMenuComponent, },
          { path: 'new-order', component: NewOrderComponent,
            children: [
              { path: '', component: ProductOrderComponent, },
              { path: 'client', component: ClientOrderComponent, },
            ]},
          { path: 'orders-inprogress', component: OrdersInprogressComponent },
          { path: 'orders-inprogress/order-details/:id', component: OrderDetailsComponent },
          { path: 'view-stocks', component: ViewStocksComponent },
          { path: 'sales-history', component: SalesHistoryComponent },
        ]
      },
      {
        path: 'stocks', component: StocksComponent,
        children: [
          { path: '', component: StocksMenuComponent, },
          { path: 'register-product', component: RegisterProductComponent },
          { path: 'manage-stocks', component: ManageStocksComponent },
          { path: 'manage-stocks/edit-stock/:id', component: EditStockComponent },
          { path: 'stocks-history', component: StocksHistoryComponent },
        ]
      },
      {
        path: 'client', component: ClientComponent,
        children: [
          { path: '', component: ClientsMenuComponent, },
          { path: 'manage-clients', component: ManageClientsComponent },
          { path: 'manage-clients/client-details/:id', component: ClientDetailsComponent },
          { path: 'manage-clients/client-details/edit-client/:id', component: EditClientComponent },
          { path: 'register-client', component: RegisterClientComponent },
        ]
      },
      {
        path: 'orders', component: OrdersComponent,
        children: [
          { path: '', component: DeliveringOrdersInprogressComponent, },
          { path: 'order-details/:id', component: DeliveringOrderDetailsComponent, },
        ]
      },
      {
        path: 'admin', component: AdminComponent,
        children: [
          { path: '', component: AdminMenuComponent, },
          { path: 'admin-users', component: AdminUsersComponent },
          { path: 'admin-users/user-details/:id', component: UserDetailsComponent },
          { path: 'admin-users/user-details/edit-user/:id', component: EditUserComponent },
          { path: 'create-user', component: CreateUserComponent },
        ]
      },
    ]
  },
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'login', component: LoginformComponent, },
      { path: 'forgot-password', component: ForgotpasswordComponent },
      { path: 'reset-password/:user_id/:token', component: ResetpasswordComponent },
      { path: 'product-info/:id', component: QrproductinfoComponent, }
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AppRoutingModule { }
