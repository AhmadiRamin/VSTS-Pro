import { Nav } from 'office-ui-fabric-react/lib/Nav';
import * as React from 'react';
const initialState = { title: "Welcome Page" };
type State = Readonly<typeof initialState>;

class WelcomePage extends React.Component<object, State>{
    public readonly state: State = initialState;
    public render() {
        return (
            <>
                <Nav
                    groups={
                        [
                            {
                                links: [
                                    {
                                        name: 'Home',
                                        url: 'http://example.com',
                                        links: [{
                                            name: 'Activity',
                                            url: 'http://msn.com',
                                            key: 'key1'
                                        },
                                        {
                                            name: 'News',
                                            url: 'http://msn.com',
                                            key: 'key2'
                                        }],
                                        isExpanded: true
                                    },
                                    { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                                    { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                                    { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                                    { name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
                                    {
                                        name: 'Edit',
                                        url: 'http://cnn.com',
                                        onClick: this._onClickHandler2,
                                        icon: 'Edit',
                                        key: 'key8'
                                    },
                                    {
                                        name: 'Delete',
                                        url: 'http://cnn.com',
                                        onClick: this._onClickHandler2,
                                        iconProps: { iconName: 'Delete' },
                                        key: 'key9'
                                    }
                                ]
                            }
                        ]
                    }
                    expandedStateText={'expanded'}
                    collapsedStateText={'collapsed'}
                    selectedKey={'key3'}
                />
            </>
        )
    }

    private _onClickHandler2(e: React.MouseEvent<HTMLElement>): false {
        return false;
    }
}

export default WelcomePage;