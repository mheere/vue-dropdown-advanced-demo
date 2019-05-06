
//import * as _vdda from 'vdda';
import { HelloWorld } from 'vdt-mh'
//const vdda = require('vdda').default;

debugger;

//let d = _vdda.default;
//let HelloWorld = _vdda.HelloWorld;

new Vue({
	el: '#ex2',
	components: { HelloWorld },
	template: `
		<HelloWorld msg="Hi Marcel, this is HelloWorld component rendering... - all ok!"/>
	`
})


// template: `
// 		<HelloWorld msg="Hi Marcel, this is HelloWorld component rendering... - all ok!"/>
// 	`

// new Vue({
// 	el: '#example',
// 	data: { hello: 'Hello World Marcello!2' }
// })