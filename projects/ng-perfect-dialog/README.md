# ng-perfect dialog (ZERO DEPENDENCIES) 24 kB

All types of dialogs in one package for Angular

- [Simple Alert Dialog](#simple-alert-dialog)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/walosha/ng-perfect-dialog) [![Support](https://img.shields.io/badge/Support-Angular%202%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%204%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%205%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]()

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

## Table of Contents

- Getting started
- [Installation](#installation)
- [Implementation](#implementation)
- [Creator](#creator)
- [License](#license)

## Getting Started

## Installation

```bash
npm i ng-perfect-dialog
```

### Implementation

Import **NgxDialogsModule** in your application module. For example: **app.module.ts**

```typescript
import { PerfectDialogModule } from "ng-perfect-dialog";

@NgModule({
  imports: [
    PerfectDialogModule,
    // ...
  ],
})
export class AppModule {}
```

```typescript
import { PerfectDialogService } from "ng-perfect-dialog";

export class HomeComponent {
  constructor(private perfectDialogService: PerfectDialogService) {}

  open() {
    this.perfectDialogService.open({
      component: InfoComponent,
      modalConfigurations: {
        disableClose: false,
        width: "48rem",
      },
      data: {
        name: "OLawale",
      },
    });
  }

  cancel() {
    this.perfectDialogService.$close.next(true);
  }
}
```

```typescript
export class CustomActionModalComponent implements OnInit {
  name: string = "";
}
```

- // .component.html

```html
<perfect-dialog></perfect-dialog>
```

## Creator

- Olawale Afuye

## License

![Support](https://img.shields.io/badge/Support-ES6-blue.svg?style=flat-square) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
