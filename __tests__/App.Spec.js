import App from '../src/App.vue'

import {mount} from '@vue/test-utils'

describe('Testing APP component',()=>{
    it('Expecting message from App component',()=>{
        const wrapper = mount(App)
        expect(wrapper.element.textContent).toBe("Hello")
    })
})