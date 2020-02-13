import { Item } from '../Item'

test('should create an instance of item', () => {
    const item = Item.create({
        itemId: 1,
        icon: 'search',
        imageUrl: 'https://example.com/1.png',
        isBackgroud: true
    })

    expect(item.itemId).toBe(1)
})

test('should create  item without image url', () => {
    const item = Item.create({
        itemId: 1,
        icon: 'search',
        isBackgroud: false
    })

    expect(item.icon).toBe('search')

})
