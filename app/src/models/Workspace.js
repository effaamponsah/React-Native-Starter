import { types } from 'mobx-state-tree';
import { Item } from './Item';

export const Workspace = types.model({
    title: types.string,
    content: types.optional(types.array(Item), [])
})
    .actions(self => ({
        add_content(item) {
            self.content.push(item)
        }
    }))