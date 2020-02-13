import { Workspace } from '../Workspace';
import { Item } from '../Item';
it('should create an instance of workspace', () => {
    const workspace = Workspace.create({
        title: 'Workspace 1',
        content: []
    })

    expect(workspace.content.length).toBe(0)

    workspace.add_content(
        Item.create({
            itemId: 1,
            icon: 'search',
            imageUrl: 'https://example.com/1.png',
            isBackgroud: true
        })
    )

    expect(workspace.content.length).toBe(1)
});