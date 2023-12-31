import { observer } from 'mobx-react-lite';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfilePhotos from './ProfilePhotos';
//import ProfileAbout from './ProfileAbout';
//import ProfileFollowings from './ProfileFollowings';
//import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

export default observer(function ProfileContent( { profile }: Props) {
   
     //   const { profileStore } = useStore();

    const panes = [

        { menuItem: 'About', render: () => <Tab.Pane>About content</Tab.Pane> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: () => <Tab.Pane>Events content</Tab.Pane> },
        { menuItem: 'Followers', render: () => <Tab.Pane>Followers content</Tab.Pane> },
        { menuItem: 'Following', render: () => <Tab.Pane>Following content</Tab.Pane> },
        //    { menuItem: 'About', render: () => <ProfileAbout /> },
        //    { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        //    { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        //    { menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane> },
        //    {
        //        menuItem: 'Followers',
        //        render: () => <Tab.Pane>Followers Content</Tab.Pane>
        //    },
        //    {
        //        menuItem: 'Following',
        //        render: () => <Tab.Pane>Following Content</Tab.Pane>
        //    }
        //{ menuItem: 'Followers', render: () => <ProfileFollowings /> },
        //    { menuItem: 'Following', render: () => <ProfileFollowings /> },
        ];

        return (
            <Tab
                menu={{ fluid: true, vertical: true }}
                menuPosition='right'
                panes={panes}
               // onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
            />
        )
    })