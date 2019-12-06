import {mount} from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue"

describe('Footer tests', () => {

    const wrapper = mount(Footer, {
        propsData: {
            // Add stub function to test dissapearence of whatever you finish this text
            add: () => {
            }
        }
    });

    it('Check when "+" button is clicked in Footer component "open" property in Footer component changes to true', () => {
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.$data.open);
    });

    it('Check if after adding a todo item we clear the textbox and close it back (Rewrote the add function, because it has to to with the non-working server stuff)', () => {
        wrapper.find('input').trigger('keyup.enter');
        expect(wrapper.vm.$data.title).toBe("");
        expect(!wrapper.vm.$data.open);
    });
});