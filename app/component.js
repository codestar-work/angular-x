import { Component } from '@angular/core';

@Component({
	selector: 'my-component',
	template: '<h1>Hello {{ name }}</h1>'
})
export class MyComponent {
	constructor() {
		this.name = "Mark Zuckerberg"
	}
}
