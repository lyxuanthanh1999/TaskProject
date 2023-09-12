import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import DrawerCustom from './Components/DrawerCustom';
import auth from '../screens/Auth';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ConfigScreen from './ConfigScreen';
import DemoA from '../screens/Demo/DemoA';
import DemoD from '../screens/Demo/DemoD';
import DemoC from '../screens/Demo/DemoC';
import DemoB from '../screens/Demo/DemoB';
import VersionApp from '../screens/VersionApp/VersionApp';
import Language from '../screens/Language/Language';
import IntroApp from '../screens/IntroApp/IntroApp';
import Utils from '../utils';
import { useSelector } from 'react-redux';
let isCheckToken = false;

const ModuleStack = createStackNavigator();
const ModuleStackScreen = () => {
    return (
        <ModuleStack.Navigator
            mode="modal"
            // name="StackChangePassword"
            initialRouteName={ConfigScreen.HomeScreen}
            screenOptions={{
                headerShown: false,
                gestureDirection: 'horizontal',
                cardStyle: { backgroundColor: 'transparent' },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress?.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress?.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.2],
                            extrapolate: 'clamp',
                        }),
                    },
                }),
                // ...TransitionPresets.SlideFromRightIOS,
            }}
        // headerMode="none"
        >
            <ModuleStack.Screen options={{
                headerShown: false
            }} name={ConfigScreen.HomeScreen} component={HomeScreen} />

        </ModuleStack.Navigator>
    );
};
const Tab = createBottomTabNavigator();
const TabBottom = () => {
    return (
        <Tab.Navigator initialRouteName={'Main.Home'}
        //  tabBar={props => <Tabbar {...props} />}
        >
            <Tab.Screen name={ConfigScreen.DemoA} component={DemoA} />
            <Tab.Screen name={ConfigScreen.DemoB} component={DemoB} />
            <Tab.Screen name={ConfigScreen.MainHome} component={ModuleStackScreen} options={{ headerShown: false }} />
            <Tab.Screen name={ConfigScreen.DemoC} component={DemoC} />
            <Tab.Screen name={ConfigScreen.DemoD} component={DemoD} />
            {/* <Tab.Screen name={ConfigScreen.MainHomeTruyXuat} component={Stack_TruyXuat} /> */}
            {/* <Tab.Screen name={'tab'} component={Setting} /> */}
        </Tab.Navigator>
    );
};

const Drawer = createDrawerNavigator();
function DrawerMain() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false
        }} drawerContent={props => <DrawerCustom {...props} />}>
            <Drawer.Screen name={'Drawer'} component={TabBottom} options={{ headerShown: false }} />
            <Drawer.Screen name={ConfigScreen.DrawerVersionApp} component={VersionApp} />
            <Drawer.Screen name={ConfigScreen.DrawerLanguage} component={Language} />
            <Drawer.Screen name={ConfigScreen.DrawerIntroApp} component={IntroApp} />

        </Drawer.Navigator>
    );
}

const Main = createStackNavigator();
const MainST = () => {
    return (
        <Main.Navigator screenOptions={{
            headerShown: false
        }} headerMode="none">
            {/* <Main.Screen name="RootScreen" component={RootScreen} /> */}
            <Main.Screen name="Main" component={DrawerMain} options={{ headerShown: false }} />
        </Main.Navigator>
    );
};

const Stack = createNativeStackNavigator();
const stackAuth = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} name="Main" initialRouteName="auth.Login" mode="modal" headerMode="none">
            <Stack.Screen name="auth.Login" component={auth.Login} />
            <Stack.Screen name="auth.Register" component={auth.Register} />
            {/* <RootStack.Screen name="auth.Loading" component={Loading} /> */}
            {/* <Stack.Screen name="auth.RememberPass" component={auth.RememberPass} /> */}
            {/* <Stack.Screen name="auth.InfomationUser" component={auth.InfomationUser} /> */}
        </Stack.Navigator>
    );
};

const StackMainRoot = createStackNavigator();
const StackMain = props => {
    const _state = useSelector(state => state);
    console.log('[STATE NAVIGATION] : ', _state)
    return (
        <StackMainRoot.Navigator headerMode="none">

            {/* {isCheckToken ? ( */}
            {_state.AuthReducer.isCheckToken ? (
                <StackMainRoot.Screen name="RootMain" component={MainST} options={{ headerShown: false }} />
            ) : (
                <StackMainRoot.Screen name="Main.Auth" component={stackAuth} options={{ headerShown: false }} />
            )}
        </StackMainRoot.Navigator>
    );
};

const RootStack = createStackNavigator();

function AppRouter(props) {
    return (
        <NavigationContainer
            {...props}
            // linking={linking}
            ref={ref => Utils.setTopLevelNavigator(ref)}
        >
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureDirection: 'horizontal',
                    cardStyle: { backgroundColor: 'transparent' },
                    cardStyleInterpolator: ({ current: { progress } }) => ({
                        cardStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 0.5, 0.9, 1],
                                outputRange: [0, 0.25, 0.7, 1],
                            }),
                        },
                        overlayStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.2],
                                extrapolate: 'clamp',
                            }),
                        },
                    }),
                    // ...TransitionPresets.SlideFromRightIOS,
                }}
                mode="modal">
                <RootStack.Screen name="Root" component={StackMain} />
                {/* <RootStack.Screen name="Root.Loading" component={Loading} />
                <RootStack.Screen name={ConfigScreen.NetWorkLogger} component={NetWorkLogger} /> */}
                {/* //common */}
                {/* <RootStack.Screen name={ConfigScreen.RootDatePicker} component={CalandaSingalCom} />
                <RootStack.Screen name={ConfigScreen.RootSelect} component={ComponentSelectCom} />
                <RootStack.Screen name={ConfigScreen.RootSelectProps} component={ComponentSelectProps} />
                <RootStack.Screen name={ConfigScreen.RootSelectMutil} component={ComponentSelectMutil} />
                <RootStack.Screen name={ConfigScreen.ComponentSelectRight} component={ComponentSelectRight} />
                <RootStack.Screen name={ConfigScreen.ComponentSelectRightOnly} component={ComponentSelectRightOnly} />
                <RootStack.Screen name={ConfigScreen.RootMessageBox} component={MessageBox} />
                <RootStack.Screen name={ConfigScreen.RootComponentInput} component={ComponentInput} /> */}
                {/* <RootStack.Screen
                    options={{ cardStyle: { backgroundColor: 'transparent' } }}
                    name={ConfigScreen.RootComponentSelectSearch}
                    component={ComponentSelectSearch}
                />
                <RootStack.Screen
                    options={{ cardStyle: { backgroundColor: 'transparent' } }}
                    name={ConfigScreen.RootModalSearchFilter}
                    component={ModalSearchFilter}
                />
                <RootStack.Screen
                    options={{ cardStyle: { backgroundColor: 'transparent' } }}
                    name={ConfigScreen.RootComponentRNSelect}
                    component={ComponentRNSelect}
                /> */}

            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;
