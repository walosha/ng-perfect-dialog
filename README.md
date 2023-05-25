# ng-perfect dialog (ZERO DEPENDENCIES)

All types of dialogs in one package for Angular

- [Simple Alert Dialog](#simple-alert-dialog)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/walosha/ng-perfect-dialog) [![Support](https://img.shields.io/badge/Support-Angular%202%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%204%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%205%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]() ![Support](https://img.shields.io/badge/Support-ES6-blue.svg?style=flat-square) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

## Table of Contents

- Getting started
- [Installation](#installation)
- [Implementation](#implementation)
- [Settings Option](#settings-option)
- [Demo](#demo)
- [Creator](#creator)
- [License](#license)

## Getting Started

### Implementation

Import **NgxDialogsModule** in your application module. For example: **app.module.ts**

```typescript
import { SuperDialogModule } from "ng-perfect-dialog";

@NgModule({
  imports: [
    SuperDialogModule,
    // ...
  ],
})
export class AppModule {}
```

```typescript
import { Ngxalert } from "ngx-dialogs";

export class MyOwnComponent implements OnInit {
  constructor(private superDialogService: SuperDialogService) {}
  notifyDataLoss() {
    this.superDialogService.open({
      component: CustomActionModalComponent,
      modalConfigurations: {
        disableClose: false,
        width: "35.6rem",
      },
      data: {
        name: "Olawale Afuye",
        // any data type
      },
    });
  }

  cancel() {
    this.superDialogService.$close.next(true);
  }
}
```

```typescript
export class CustomActionModalComponent implements OnInit {
  name: string = "";
}
```
