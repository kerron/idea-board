import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileBody from './ProfileBody/ProfileBody';
import AppHeaderContainer from '../AppHeader/AppHeaderContainer';
import ProfileSubHeader from './ProfileSubHeader/ProfileSubHeader';

class ProfileContainer extends Component {
    render() {
        const { noteData } = this.props;
        const noteCount = Object.keys(noteData).length;

        return (
            <div>
                <AppHeaderContainer />
                <ProfileHeader>
                    <ProfileSubHeader noteCount={noteCount}/>
                </ProfileHeader>
                <ProfileBody />
                
            </div>
        );
    }
}


const mapStateToProps =({ cardReducer }) => {
    return {
        noteData: cardReducer.noteData,
    }
}

export default connect(mapStateToProps)(ProfileContainer);