import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue"

describe('List tests', () => {

    const wrapper = mount(List);

    it('Check if add 1st todo text is displayed when list is empty', () => {

        let listEmptyText = "Add your first Todo task";
        expect(wrapper.html()).toContain(listEmptyText);
        
    })

});
