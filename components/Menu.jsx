import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu as MenuPaper, Provider as PaperProvider } from 'react-native-paper';
import TabBarIcon from './TabBarIcon';

export default function Menu({ items, icon }) {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <PaperProvider>
            <View>
                <MenuPaper
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<TabBarIcon name={icon} onPress={openMenu} />}
                >
                    {items.map((item, index) => (
                        <MenuPaper.Item 
                            key={index} 
                            title={item.title} 
                            onPress={() => item.onPress()}
                        />
                    ))}
                </MenuPaper>
            </View>
        </PaperProvider>
    );
}

