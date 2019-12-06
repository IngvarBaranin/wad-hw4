import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue"
import Item from "../../src/models/Item.js"

describe('List tests', () => {

    const wrapper = mount(List);

    it('Check if add 1st todo text is displayed when list is empty', () => {

        let listEmptyText = "Add your first Todo task";
        expect(wrapper.html()).toContain(listEmptyText);
        
    });

    it('Check if an item in the list is marked as done  item is updated correctly', async () => {
        expect(wrapper.props().list).toEqual([]);

        wrapper.props().list.push(new Item("Something"));
        await wrapper.vm.$nextTick();

        expect(wrapper.props().list[0].done).toBe(false);

        wrapper.find('span').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.props().list[0].done).toBe(true);
    });
});
