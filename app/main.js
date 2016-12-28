import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'

@Component({
	selector: 'my-component',
	template: `
		Hello Angular
	`
})
class MyComponent {
}

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ MyComponent ],
	bootstrap:    [ MyComponent ]
})
class MyModule { }

let platform = platformBrowserDynamic()
platform.bootstrapModule(MyModule)
