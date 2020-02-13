import { types } from 'mobx-state-tree';

export const Item = types.model({
    itemId: types.number,
    icon: types.maybe(types.string),
    imageUrl: types.maybe(types.string),
    isBackgroud: types.boolean
});
