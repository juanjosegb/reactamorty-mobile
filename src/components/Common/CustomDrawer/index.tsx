import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";

export const CustomDrawer = () =>

    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={[styles.containHeader, {backgroundColor: theme.pri700}]}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar size='large' rounded icon={{name: 'user-circle-o', type: 'font-awesome', size: 80}}/>
                </View>
            </View>

            <DrawerItems {...this.props} />

            <View>
                <View style={{marginTop: '2%'}}>
                    <Divider style={{backgroundColor: '#777f7c90'}}/>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>